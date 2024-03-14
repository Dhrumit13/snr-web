import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { faSave, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Receiver, ReceiverListResponse, ReceiversService } from '../services/receivers.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-receiver-details',
  templateUrl: './receiver-details.component.html',
  styleUrls: ['./receiver-details.component.scss']
})
export class ReceiverDetailsComponent implements OnInit, OnDestroy {

  faTrash = faTrash;
  faSave = faSave;
  faXmark = faXmark;
  public addEditReceiverID: number = 0;

  receiverForm!: FormGroup;

  private receiverSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private tosterService: ToastrService,
    private receiversService: ReceiversService
  ) { }

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe((params: Params) => {
      this.addEditReceiverID = +params['id'];
      if (this.addEditReceiverID > 0) {
        this.getReceiverById(this.addEditReceiverID);
      }
    });
  }

  ngOnDestroy(): void {
    this.receiverSubscription$.next(true);
    this.receiverSubscription$.unsubscribe();
  }

  private createForm(): void {
    this.receiverForm = this.fb.group({
      receiverName: ['', [Validators.required]],
      email: [''],
      mobile: ['', [Validators.required]],
      address: [''],
      city: [''],
      isActive: [true],
    });
  }

  public onBackClick(): void {
    this.router.navigate(['receivers']);
  }

  handleCitySelected(item: any) {
    this.receiverForm.controls['city'].setValue(item);
  }

  // Method to submit the form
  onSubmit() {
    if (this.receiverForm.valid) {
      // Form is valid, handle the submission logic here
      this.addUpdateReceiver(this.receiverForm.value);
    } else {
      // Form is invalid, mark all fields as touched to display error messages
      this.receiverForm.markAllAsTouched();
    }
  }

  private getReceiverById(id: number): void {
    this.receiversService
      .getReceiverById(id)
      .pipe(takeUntil(this.receiverSubscription$))
      .subscribe({
        next: (response: ReceiverListResponse) => {
          if (response.receivers && response.receivers.length > 0) {
            delete response.receivers[0].receiverId;
            this.receiverForm.setValue(response.receivers[0]);
          }
        },
        error: (e) => console.error(e),
        complete: () => { },
      });
  }

  private addUpdateReceiver(data: Receiver): void {
    let request: Receiver = {};
    if (this.addEditReceiverID > 0) {
      request.receiverId = this.addEditReceiverID;
      request = { ...data, ...{ receiverId: request.receiverId } };
    } else {
      delete request.receiverId;
      request = { ...data };
    }
    this.receiversService
      .addUpdateReceiver(request)
      .pipe(takeUntil(this.receiverSubscription$))
      .subscribe({
        next: (response: any) => {
          this.tosterService.success('Success', 'Receiver saved.');
          setTimeout(() => {
            this.onBackClick();
          }, 1000);
        },
        error: (e) => this.tosterService.error('Error', 'Something goes wrong!.'),
        complete: () => {
          this.receiverForm.reset();
        },
      });
  }

  public deleteReceiverById(): void {
    this.openConfirmationDialog();
  }

  openConfirmationDialog() {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.message = 'Are you sure you want to delete?';

    modalRef.componentInstance.confirmed.subscribe((confirmed: boolean) => {
      if (confirmed) {
        if (this.addEditReceiverID && this.addEditReceiverID > 0) {
          this.receiversService
            .deleteReceiverById(this.addEditReceiverID)
            .pipe(takeUntil(this.receiverSubscription$))
            .subscribe({
              next: () => {
                this.onBackClick();
              },
              error: (e) => console.error(e),
              complete: () => { },
            });
        }
      } else {
      }
    });
  }
}


