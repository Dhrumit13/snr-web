import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { faSave, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  ChargeListResponse,
  OtherCharge,
  OtherChargesService,
} from '../services/other-charges.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-other-charges-details',
  templateUrl: './other-charges-details.component.html',
  styleUrls: ['./other-charges-details.component.scss'],
})
export class OtherChargesDetailsComponent implements OnInit, OnDestroy {
  faSave = faSave;
  faXmark = faXmark;
  faTrash = faTrash;
  public addEditChargeID: number = 0;

  chargeForm!: FormGroup;

  private otherChargeSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private otherChargesService: OtherChargesService,
    private tosterService: ToastrService
  ) {}

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe((params: Params) => {
      this.addEditChargeID = +params['id'];
      if (this.addEditChargeID > 0) {
        this.getChargeById(this.addEditChargeID);
      }
    });
  }

  ngOnDestroy(): void {
    this.otherChargeSubscription$.next(true);
    this.otherChargeSubscription$.unsubscribe();
  }

  private createForm(): void {
    this.chargeForm = this.fb.group({
      otherChargeName: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  public onBackClick(): void {
    this.router.navigate(['snr/other-charges']);
  }

  // Method to submit the form
  onSubmit() {
    if (this.chargeForm.valid) {
      // Form is valid, handle the submission logic here
      this.addUpdateCharge(this.chargeForm.value);
    } else {
      // Form is invalid, mark all fields as touched to display error messages
      this.chargeForm.markAllAsTouched();
    }
  }

  private getChargeById(id: number): void {
    this.otherChargesService
      .getChargeById(id)
      .pipe(takeUntil(this.otherChargeSubscription$))
      .subscribe({
        next: (response: ChargeListResponse) => {
          if (response.otherChargess && response.otherChargess.length > 0) {
            delete response.otherChargess[0].otherChargeId;
            this.chargeForm.setValue(response.otherChargess[0]);
          }
        },
        error: (e) => console.error(e),
        complete: () => {},
      });
  }

  private addUpdateCharge(data: OtherCharge): void {
    let request: OtherCharge = {};
    if (this.addEditChargeID > 0) {
      request.otherChargeId = this.addEditChargeID;
      request = { ...data, ...{ otherChargeId: request.otherChargeId } };
    } else {
      delete request.otherChargeId;
      request = { ...data };
    }
    this.otherChargesService
      .addUpdateCharge(request)
      .pipe(takeUntil(this.otherChargeSubscription$))
      .subscribe({
        next: (response: any) => {
          this.tosterService.success('Success', 'Charge saved.');
          setTimeout(() => {
            this.onBackClick();
          }, 1000);
        },
        error: (e) =>
          this.tosterService.error('Error', 'Something goes wrong!.'),
        complete: () => {
          this.chargeForm.reset();
        },
      });
  }

  public deleteCustomerById(): void {
    this.openConfirmationDialog();
  }

  openConfirmationDialog() {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.message =
      'Are you sure you want to delete this customer?';

    modalRef.componentInstance.confirmed.subscribe((confirmed: boolean) => {
      if (confirmed) {
        if (this.addEditChargeID && this.addEditChargeID > 0) {
          this.otherChargesService
            .deleteChargeById(this.addEditChargeID)
            .pipe(takeUntil(this.otherChargeSubscription$))
            .subscribe({
              next: () => {
                this.onBackClick();
              },
              error: (e) => console.error(e),
              complete: () => {},
            });
        }
      } else {
      }
    });
  }
}
