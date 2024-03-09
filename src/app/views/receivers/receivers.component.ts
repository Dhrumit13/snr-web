import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faPlus,
  faSearch,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {
  Customer,
  CustomerListResponse,
  CustomersService,
} from '../customers/service/customers.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-receivers',
  templateUrl: './receivers.component.html',
  styleUrls: ['./receivers.component.scss']
})
export class ReceiversComponent implements OnInit , OnDestroy{
  faPlus = faPlus;
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;
  public customerList: Customer[] | undefined = [];
  private customerSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private modalService: NgbModal,
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
          this.customerList = response.customers;
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
  }

  public onAddCustomer(): void {
    this.router.navigate(['receivers/receiver-details', 0]);
  }

  public onEditCustomer(customer: Customer): void {
    this.router.navigate(['receivers/receiver-details', customer.customerId]);
  }

  public deleteCustomerById(customer: Customer): void {
    this.openConfirmationDialog(customer);
  }

  openConfirmationDialog(customer: Customer) {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.message = 'Are you sure you want to delete?';

    modalRef.componentInstance.confirmed.subscribe((confirmed: boolean) => {
      if (confirmed) {
        if (customer.customerId && customer.customerId > 0) {
          this.customersService
            .deleteCustomerById(customer.customerId)
            .pipe(takeUntil(this.customerSubscription$))
            .subscribe({
              next: () => {
                this.getAllCustomers();
              },
              error: (e) => console.error(e),
              complete: () => console.info('complete'),
            });
        }
      } else {
      }
    });
  }
}