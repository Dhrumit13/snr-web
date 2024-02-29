import { Component, OnDestroy, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  Customer,
  CustomerListResponse,
  CustomersService,
} from '../../customers/service/customers.service';
import { Subject, takeUntil } from 'rxjs';
import {
  CityRateService,
  RateListResponse,
  Rates,
} from '../service/city-rate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rate-details',
  templateUrl: './rate-details.component.html',
  styleUrls: ['./rate-details.component.scss'],
})
export class RateDetailsComponent implements OnInit, OnDestroy {
  public isDefaultNavActive = true;
  public surfaceList: any = [];
  public airList = [];
  public railList = [];
  public addEditRateID: number = 0;

  //formFields
  public selectedCustomer!: Customer;
  public transportationMode: string = 'surface';
  public selectedCity: any;
  public minWeight: any;
  public ratePerKG: any;
  public ratePerPiece: any;
  // end

  faEdit = faEdit;
  faTrash = faTrash;

  public customerList: Customer[] | undefined = [];
  private customerSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private customersService: CustomersService,
    private tosterService: ToastrService,
    private cityRateService: CityRateService
  ) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  ngOnDestroy(): void {
    this.customerSubscription$.next(true);
    this.customerSubscription$.unsubscribe();
  }

  public onCustomerSelect(): void {
    if(this.selectedCustomer) {
      this.selectedCity = this.selectedCustomer.city?.toUpperCase();
    }
  }

  private getAllCustomers(): void {
    this.customersService
      .getAllCustomers()
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: CustomerListResponse) => {
          if (response.customers && response.customers?.length > 0) {
            this.customerList = response.customers;
            console.log('this.customerList: ', this.customerList);
          }
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
  }

  private getRateByCustomer(): void {
    this.cityRateService
      .getRatesByCustomer()
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: RateListResponse) => {
          if (response.rates && response.rates?.length > 0) {
            console.log('response.rates: ', response.rates);
          }
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
  }

  public enableSave(): boolean {
    let isEnabled = false;
    if (
      this.selectedCustomer &&
      this.transportationMode &&
      this.selectedCity &&
      (this.ratePerKG || this.ratePerPiece)
    ) {
      return (isEnabled = true);
    } else {
      return (isEnabled = false);
    }
  }

  onSave(): void {
    let rateRequest: Rates = {
      customerId: this.selectedCustomer.customerId,
      city: this.selectedCity,
      transportationMode: this.transportationMode,
      minWeight: this.minWeight,
      ratePerKg: this.ratePerKG,
      ratePerPiece: this.ratePerPiece,
    };

    if (this.addEditRateID > 0) {
      rateRequest.rateId = this.addEditRateID;
    }
    this.cityRateService
      .addUpdateRate(rateRequest)
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: any) => {
          console.log('response: ', response);
          this.tosterService.success('Success', 'Rate saved.');
        },
        error: (e) =>
          this.tosterService.error('Error', 'Something goes wrong!.'),
        complete: () => {
          this.resetForm();
        },
      });
  }

  onDeleteRate(): void {

  }

  public resetForm(): void {
    this.selectedCustomer = {};
    this.transportationMode = 'surface';
    this.selectedCity = '';
    this.minWeight = '';
    this.ratePerKG = '';
    this.ratePerPiece = '';
  }
}
