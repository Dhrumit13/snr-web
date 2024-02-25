import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faPlus,
  faSearch,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomerListResponse, CustomersService } from '../customers/service/customers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
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

  // ngOnInit() {
  //   this.getAllCustomers();
  // }

  // ngOnDestroy(): void {
  //   this.customerSubscription$.next(true);
  //   this.customerSubscription$.unsubscribe();
  // }

  // private getAllCustomers(): void {
  //   this.customersService
  //     .getAllCustomers()
  //     .pipe(takeUntil(this.customerSubscription$))
  //     .subscribe({
  //       next: (response: CustomerListResponse) => {
  //         console.log('response: ', response);
  //         if (response.customers && response.customers?.length > 0) {
  //           this.customerList = response.customers;
  //         }
  //       },
  //       error: (e) => console.error(e),
  //       complete: () => console.info('complete'),
  //     });
  // }

  public onAddUser(): void {
    this.router.navigate(['users/users-details', 0]);
  }

  // public onEditCustomer(customer: Customer): void {
  //   this.router.navigate(['customers/customer-details', customer.customerId]);
  // }

  // public deleteCustomerById(customer: Customer): void {
  //   if (customer.customerId && customer.customerId > 0) {
  //     this.customersService
  //       .deleteCustomerById(customer.customerId)
  //       .pipe(takeUntil(this.customerSubscription$))
  //       .subscribe({
  //         next: () => {
  //           this.getAllCustomers();
  //         },
  //         error: (e) => console.error(e),
  //         complete: () => console.info('complete'),
  //       });
  //   }
  // }

}
