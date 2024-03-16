import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  Customer,
  CustomerListResponse,
  CustomersService,
} from '../../customers/service/customers.service';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {
  faPlus,
  faSave,
  faTrash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import {
  ChargeListResponse,
  OtherCharge,
  OtherChargesService,
} from '../../other-charges/services/other-charges.service';
import { AutoSelectCustomerComponent } from '../../common/auto-select-customer/auto-select-customer.component';
import { AutoSelectReceiverComponent } from '../../common/auto-select-receiver/auto-select-receiver.component';
import { AutoCompleteCityComponent } from '../../common/auto-complete-city/auto-complete-city.component';

@Component({
  selector: 'app-consignment-detail',
  templateUrl: './consignment-detail.component.html',
  styleUrls: ['./consignment-detail.component.scss'],
})
export class ConsignmentDetailComponent implements OnInit, OnDestroy {
  @ViewChild('autocompleteReceiver')
  autocompleteReceiver!: AutoSelectReceiverComponent;
  @ViewChild('autocompleteCustomer')
  autocompleteCustomer!: AutoSelectCustomerComponent;
  @ViewChild('autocompleteOrigin')
  autocompleteOrigin!: AutoCompleteCityComponent;
  @ViewChild('autocompleteDestination')
  autocompleteDestination!: AutoCompleteCityComponent;

  faTrash = faTrash;
  faSave = faSave;
  faXmark = faXmark;
  faPlus = faPlus;
  public addEditCustomerID: number = 0;

  bookingForm!: FormGroup;

  public chargeList: OtherCharge[] | undefined = [];
  private customerSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private customerService: CustomersService,
    private tosterService: ToastrService,
    private otherChargesService: OtherChargesService
  ) {}

  ngOnInit() {
    this.getAllCharges();
    this.createForm();
    this.route.params.subscribe((params: Params) => {
      this.addEditCustomerID = +params['id'];
      if (this.addEditCustomerID > 0) {
        this.getCustomerById(this.addEditCustomerID);
      }
    });
  }

  ngOnDestroy(): void {
    this.customerSubscription$.next(true);
    this.customerSubscription$.unsubscribe();
  }

  private getAllCharges(): void {
    this.otherChargesService
      .getAllCharges()
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: ChargeListResponse) => {
          this.chargeList = response.otherChargess;
        },
        error: (e) => console.error(e),
        complete: () => {},
      });
  }

  public onOtherChargeSelect(controlIndex: number, charge: OtherCharge): void {
    const chargesGroup: any = this.chargeControls.at(controlIndex);
    chargesGroup.controls['value'].setValue(charge.amount);
  }

  private createForm(): void {
    this.bookingForm = this.fb.group({
      date: [new Date(), [Validators.required]],
      bookingNumber: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      receiver: ['', [Validators.required]],
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      packageType: ['surface', [Validators.required]],
      paymentMode: ['credit'],
      otherCharges: this.fb.array([this.createChargesControl()]),
    });

    // Subscribe to value changes in the form controls
    this.bookingForm
      .get('customer')
      ?.valueChanges.subscribe(() => this.calculateGrossAmount());
    this.bookingForm
      .get('destination')
      ?.valueChanges.subscribe(() => this.calculateGrossAmount());
    this.bookingForm
      .get('packageType')
      ?.valueChanges.subscribe(() => this.calculateGrossAmount());
  }

  public createChargesControl() {
    return this.fb.group({
      chargeType: [''],
      value: [''],
    });
  }

  get chargeControls() {
    return this.bookingForm.get('otherCharges') as FormArray;
  }
  public addChargeControl(index: number) {
    const lastControl = this.chargeControls.at(index);
    if (lastControl.value.value !== '') {
      const temp = this.createChargesControl();
      this.chargeControls.push(temp);
    }
  }
  public onSave(): void {
    console.log(this.bookingForm.value);
  }

  public removeOtherCharge(index: number): void {
    this.chargeControls.removeAt(index);
  }

  public onBackClick(): void {
    this.router.navigate(['customers']);
  }

  // Method to submit the form
  onSubmit() {
    if (this.bookingForm.valid) {
      // Form is valid, handle the submission logic here
      this.addUpdateCustomer(this.bookingForm.value);
    } else {
      // Form is invalid, mark all fields as touched to display error messages
      this.bookingForm.markAllAsTouched();
    }
  }

  private getCustomerById(id: number): void {
    this.customerService
      .getCustomerById(id)
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: CustomerListResponse) => {
          if (response.customers && response.customers.length > 0) {
            delete response.customers[0].customerId;
            this.bookingForm.setValue(response.customers[0]);
          }
        },
        error: (e) => console.error(e),
        complete: () => {},
      });
  }

  private addUpdateCustomer(data: Customer): void {
    let request: Customer = {};
    if (this.addEditCustomerID > 0) {
      request.customerId = this.addEditCustomerID;
      request = { ...data, ...{ customerId: request.customerId } };
    } else {
      delete request.customerId;
      request = { ...data };
    }
    this.customerService
      .addUpdateCustomer(request)
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: any) => {
          this.tosterService.success('Success', 'Customer saved.');
          setTimeout(() => {
            this.onBackClick();
          }, 1000);
        },
        error: (e) =>
          this.tosterService.error('Error', 'Something goes wrong!.'),
        complete: () => {
          this.bookingForm.reset();
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
        if (this.addEditCustomerID && this.addEditCustomerID > 0) {
          this.customerService
            .deleteCustomerById(this.addEditCustomerID)
            .pipe(takeUntil(this.customerSubscription$))
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

  // Customer
  handleCustomerSelected(customer: any) {
    this.bookingForm.controls['customer'].setValue(customer);
  }

  // Receiver
  handleReceiverSelected(customer: any) {
    this.bookingForm.controls['receiver'].setValue(customer);
  }

  // Origin
  handleOriginSelected(item: any) {
    this.bookingForm.controls['origin'].setValue(item);
  }

  // Destination
  handleDestinationSelected(item: any) {
    this.bookingForm.controls['destination'].setValue(item);
  }

  public calculateGrossAmount(): void {
    const customer = this.bookingForm.get('customer')?.value;
    console.log('customer: ', customer);
    const destination = this.bookingForm.get('destination')?.value;
    console.log('destination: ', destination);
    const packageType = this.bookingForm.get('packageType')?.value;
    console.log('packageType: ', packageType);
  }


}
