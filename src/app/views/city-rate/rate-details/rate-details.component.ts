import { Component, OnDestroy, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  Customer,
  CustomerListResponse,
  CustomersService,
} from '../../customers/service/customers.service';
import { Subject, takeUntil } from 'rxjs';

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

  constructor(private customersService: CustomersService) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  ngOnDestroy(): void {
    this.customerSubscription$.next(true);
    this.customerSubscription$.unsubscribe();
  }

  public onCustomerSelect(event: any): void {
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

  onSave(): void {
    let temp = {
      cityName: 'Vadodara',
      minWeight: '25',
      ratePerKg: '25',
      ratePerPiece: '0',
    };
    this.surfaceList.push(temp);
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
