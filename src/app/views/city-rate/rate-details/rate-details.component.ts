import { Component, OnDestroy, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  Customer,
  CustomerListResponse,
  CustomersService,
} from '../../customers/service/customers.service';
import { Subject, takeUntil } from 'rxjs';
import { CityRateService, RateListResponse } from '../service/city-rate.service';

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

  //formFields
  public selectedCustomer!: Customer;
  public selectedMode: any;
  public selectedCity: any;
  public minWeight: any;
  public ratePerKG: any;
  public ratePerPiece: any;
  // end

  faEdit = faEdit;
  faTrash = faTrash;

  public customerList: Customer[] | undefined = [];
  private customerSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(private customersService: CustomersService,
    private cityRateService: CityRateService) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  ngOnDestroy(): void {
    this.customerSubscription$.next(true);
    this.customerSubscription$.unsubscribe();
  }

  public onCustomerSelect(event: any): void {
    console.log('this.selectedCustomer: ', this.selectedCustomer);
    console.log('event: ', event.target.value);
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

  onSave(): void {
    let rateRequest = {
      customerId: this.selectedCustomer.customerId,
      cityName: this.selectedCity,
      minWeight: this.minWeight,
      ratePerKg: this.ratePerKG,
      ratePerPiece: this.ratePerPiece,
    };
    this.surfaceList.push(rateRequest);
  }

  public enableSave(): boolean {
    let isEnabled = false;
    if(this.selectedCustomer
      && this.selectedMode
      && this.selectedCity
      && (this.ratePerKG || this.ratePerPiece)) {
       return isEnabled = true;
      } else {
       return isEnabled = false;
      }
  }

  public resetForm(): void {
    this.selectedCustomer = {};
    this.selectedMode = null;
    this.selectedCity = '';
    this.minWeight = '';
    this.ratePerKG = '';
    this.ratePerPiece = '';
  }
}
