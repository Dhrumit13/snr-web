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
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.scss'],
})
export class ConsignmentComponent implements OnInit, OnDestroy {
  faPlus = faPlus;
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;
  public customerList: Customer[] | undefined = [];
  colDefs: ColDef[] = [
    { field: 'customerId', hide: true },
    { field: 'name', flex: 1, filter: 'agSetColumnFilter' },
    { field: 'email', flex: 1, filter: 'agSetColumnFilter' },
    { field: 'mobile', flex: 1, filter: 'agSetColumnFilter' },
    { field: 'gstNo', flex: 1, hide: true },
    { field: 'cgst', flex: 1, hide: true },
    { field: 'igst', flex: 1, hide: true },
    { field: 'sgst', flex: 1, hide: true },
    { field: 'address', flex: 1, hide: true },
    { field: 'city', flex: 1, filter: 'agSetColumnFilter' },
    { field: 'state', flex: 1, hide: true },
    { field: 'isActive', flex: 1, hide: true },
  ];
  private customerSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  ngOnDestroy(): void {
    this.customerSubscription$.next(true);
    this.customerSubscription$.unsubscribe();
  }

  // Ag grid
  gridOptions = {
    onRowClicked: this.onRowClicked.bind(this),
    getRowStyle: this.getRowStyle.bind(this),
  };
  getRowStyle(params: any): any {
    return { cursor: 'pointer' };
  }

  onRowClicked(params: any): void {
    this.onEditCustomer(params.data);
  }

  // end

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
    this.router.navigate(['consignments/consignment-details', 0]);
  }

  public onEditCustomer(customer: Customer): void {
    this.router.navigate(['consignments/consignment-details', customer.customerId]);
  }
}
