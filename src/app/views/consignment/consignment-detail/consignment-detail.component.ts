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
import {
  CityRateService,
  RateListResponse,
  Rates,
} from '../../city-rate/service/city-rate.service';

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
  grossAmountCalculationHint = '';
  faTrash = faTrash;
  faSave = faSave;
  faXmark = faXmark;
  faPlus = faPlus;
  public addEditCustomerID: number = 0;

  bookingForm!: FormGroup;
  public customerCityRates: Rates[] = [];
  public chargeList: OtherCharge[] | undefined = [];
  private customerSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private customerService: CustomersService,
    private tosterService: ToastrService,
    private cityRateService: CityRateService,
    private otherChargesService: OtherChargesService
  ) {}

  ngOnInit() {
    this.getAllCharges();
    this.createForm();
    this.bookingForm.controls['netAmount'].disable();
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
      bookingNumber: [{ value: '', disabled: true }, [Validators.required]],
      customer: ['', [Validators.required]],
      receiver: ['', [Validators.required]],
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      quantity: [''],
      grossAmount: ['', [Validators.required]],
      packageType: ['surface', [Validators.required]],
      paymentMode: ['credit'],
      otherCharges: this.fb.array([this.createChargesControl()]),
      netAmount: ['', [Validators.required]],
      remarks: [''],
    });

    // Subscribe to value changes in the form controls
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
    console.log(this.bookingForm.getRawValue());
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
    if (customer.customerId) {
      this.getCityRatesByCustomer(customer.customerId);
    }
    this.bookingForm.controls['customer'].setValue(customer);
  }

  private getCityRatesByCustomer(customerId: number): void {
    this.customerCityRates = [];
    this.cityRateService
      .getRatesByCustomer(customerId)
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: RateListResponse) => {
          if (response.rates && response.rates?.length > 0) {
            this.customerCityRates = response.rates;
            this.calculateGrossAmount();
          }
        },
        error: (e) => console.error(e),
        complete: () => {},
      });
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
    this.grossAmountCalculationHint = '';
    this.bookingForm.controls['grossAmount'].setValue('');
    const customer = this.bookingForm.get('customer')?.value;
    const destination = this.bookingForm.get('destination')?.value;
    const packageType = this.bookingForm.get('packageType')?.value;

    if (customer && destination && packageType) {
      let selectedCityRate = this.customerCityRates.find(
        (x) => x.city === destination && x.transportationMode === packageType
      );
      let calculationBy = '';
      if (selectedCityRate?.ratePerKg && selectedCityRate?.ratePerKg > 0) {
        this.grossAmountCalculationHint =
          'Gross amount calculation on <strong> rate per KG </strong>';
        calculationBy = 'weight';
      } else {
        calculationBy = 'box';
        this.grossAmountCalculationHint =
          'Gross amount calculation on <strong> rate per Quantity(Boxes) </strong>';
      }

      let weightValue: number = this.bookingForm.controls['weight'].value;
      let quantityValue: number = this.bookingForm.controls['quantity'].value;

      if (
        weightValue &&
        selectedCityRate?.minWeight &&
        weightValue < +selectedCityRate?.minWeight
      ) {
        const min = +selectedCityRate?.minWeight; // New minimum value
        this.bookingForm.get('weight')?.setErrors({ invalid: true });
        this.tosterService.error(
          'Entered weight is less then minimum weight.',
          'ERROR'
        );
      } else {
        switch (calculationBy) {
          case 'weight':
            if (selectedCityRate?.ratePerKg) {
              let grossAmount: number =
                +selectedCityRate?.ratePerKg * weightValue;
              this.bookingForm.controls['grossAmount'].setValue(grossAmount);
            }
            break;

          case 'box':
            if (selectedCityRate?.ratePerPiece) {
              let grossAmount: number =
                +selectedCityRate?.ratePerPiece * quantityValue;
              this.bookingForm.controls['grossAmount'].setValue(grossAmount);
            }
            break;
          default:
            break;
        }
      }
    }
  }

  public onWeightBlur(): void {
    this.calculateGrossAmount();
  }

  public calculateNet(): void {
    let netAmount = 0;
    netAmount = +this.bookingForm.controls['grossAmount'].value;
    this.chargeControls.controls.forEach((control: any) => {
      if (control.controls['value'].value > 0) {
        netAmount += parseInt(control.controls['value'].value);
      }
    });

    this.bookingForm.controls['netAmount'].setValue(netAmount);
  }

  onPrint(): void {
    const printContent = document.getElementById('snr-receipt');
    const WindowPrt = window.open(
      '',
      '',
      'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0'
    );
    if (WindowPrt && printContent) {
      WindowPrt.document.write(printContent.innerHTML);
      WindowPrt.document.close();
      WindowPrt.focus();
      WindowPrt.print();
      // WindowPrt.close();
    }
  }
}
