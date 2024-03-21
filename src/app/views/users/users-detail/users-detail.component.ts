import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faSave, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import {
  User,
  UserListResponse,
  UsersService,
} from '../services/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { AutoCompleteCityComponent } from '../../common/auto-complete-city/auto-complete-city.component';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrl: './users-detail.component.scss',
})
export class UsersDetailComponent implements OnInit, OnDestroy {

  @ViewChild('autocomplete') autocomplete!: AutoCompleteCityComponent;
  public addEditUserID: number = 0;
  faTrash = faTrash;
  faSave = faSave;
  faXmark = faXmark;
  userForm!: FormGroup;

  private userSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private userService: UsersService,
    private tosterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.route.params.subscribe((params: Params) => {
      this.addEditUserID = +params['id'];
      if (this.addEditUserID > 0) {
        this.getUserById(this.addEditUserID);
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription$.next(true);
    this.userSubscription$.unsubscribe();
  }

  private createForm(): void {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: [''],
      mobile: [''],
      role: ['fieldUser', [Validators.required]],
      city: ['', [Validators.required]]
    });
  }

  public onBackClick(): void {
    this.router.navigate(['users']);
  }

  handleCitySelected(item: any) {
    this.userForm.controls['city'].setValue(item);
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Form is valid, handle the submission logic here
      this.addUpdateUser(this.userForm.value);
    } else {
      // Form is invalid, mark all fields as touched to display error messages
      this.userForm.markAllAsTouched();
    }
  }

  private getUserById(id: number): void {
    this.userService
      .getUserById(id)
      .pipe(takeUntil(this.userSubscription$))
      .subscribe({
        next: (response: UserListResponse) => {
          if (response.users && response.users.length > 0) {
            delete response.users[0].userId;
            this.userForm.setValue(response.users[0]);
            if(response?.users[0]?.city) {
              this.autocomplete.setValue(response.users[0].city);
            }
          }
        },
        error: (e) => console.error(e),
        complete: () => {},
      });
  }

  private addUpdateUser(data: User): void {
    let request: User = {};
    if (this.addEditUserID > 0) {
      request.userId = this.addEditUserID;
      request = { ...data, ...{ userId: request.userId } };
    } else {
      delete request.userId;
      request = { ...data };
    }
    this.userService
      .addUpdateUser(request)
      .pipe(takeUntil(this.userSubscription$))
      .subscribe({
        next: (response: any) => {
          this.tosterService.success('Success', 'User saved.');
          setTimeout(() => {
            this.onBackClick();
          }, 1000);
        },
        error: (e) =>
          this.tosterService.error('Error', 'Something goes wrong!.'),
        complete: () => {
          this.userForm.reset();
        },
      });
  }

  public deleteUserById(): void {
    this.openConfirmationDialog();
  }

  openConfirmationDialog() {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.message = 'Are you sure you want to delete this user?';

    modalRef.componentInstance.confirmed.subscribe((confirmed: boolean) => {
      if (confirmed) {
        if (this.addEditUserID && this.addEditUserID > 0) {
          this.userService
            .deleteUserById(this.addEditUserID)
            .pipe(takeUntil(this.userSubscription$))
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
