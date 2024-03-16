import { Component, OnInit } from '@angular/core';
import { faEdit, faPlus, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Customer, CustomerListResponse, CustomersService } from '../customers/service/customers.service';
import { Subject } from 'rxjs/internal/Subject';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-city-rate',
  templateUrl: './city-rate.component.html',
  styleUrls: ['./city-rate.component.scss'],
})
export class CityRateComponent implements OnInit {
  faPlus = faPlus;
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;
  public customerList: Customer[] | undefined = [];
  private customerSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  ngOnDestroy(): void {
    this.customerSubscription$.next(true);
    this.customerSubscription$.unsubscribe();
  }

  private getAllCustomers(): void {
    this.customersService
      .getAllCustomers()
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: CustomerListResponse) => {
          console.log('response: ', response);
          if (response.customers && response.customers?.length > 0) {
            this.customerList = response.customers;
          }
        },
        error: (e) => console.error(e),
        complete: () => {},
      });
  }

  public onAdd(): void {
    this.router.navigate(['city-rate/rate-details', 0]);
  }

  public onEditCustomer(customer: Customer): void {
    this.router.navigate(['city-rate/rate-details', customer.customerId]);
  }

  public deleteCustomerById(customer: Customer): void {
    if (customer.customerId && customer.customerId > 0) {
      this.customersService
        .deleteCustomerById(customer.customerId)
        .pipe(takeUntil(this.customerSubscription$))
        .subscribe({
          next: () => {
            this.getAllCustomers();
          },
          error: (e) => console.error(e),
          complete: () => {},
        });
    }
  }
}
