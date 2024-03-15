import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, map, startWith, takeUntil } from 'rxjs';
import {
  CustomerListResponse,
  CustomersService,
} from '../../customers/service/customers.service';

@Component({
  selector: 'app-auto-select-customer',
  templateUrl: './auto-select-customer.component.html',
  styleUrls: ['./auto-select-customer.component.scss'],
})
export class AutoSelectCustomerComponent implements OnInit {
  @Output() optionSelected = new EventEmitter<string>();
  public customerMasterList: any[] = [];

  private customerSubscription$: Subject<boolean> = new Subject<boolean>();

  options: any[] = [];
  filteredOptions!: Observable<any[]>;
  selectedCustomer = new FormControl();

  constructor(private customerService: CustomersService) {
    this.getAllCustomers();
  }

  ngOnInit() {
    this.filteredOptions = this.selectedCustomer.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private getAllCustomers(): void {
    this.customerService
      .getAllCustomers()
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: CustomerListResponse) => {
          if (response.customers) {
            this.customerMasterList = response.customers;
          }
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
  }

  public displayProperty(value: any) {
    if (value) {
      return value.name;
    }
  }

  private _filter(value: any): any[] {
    let filterValue = '';
    if (typeof value === 'object') {
      filterValue = value?.name?.toLowerCase();
    } else if (value) {
      filterValue = value?.toLowerCase();
    } else {
      filterValue = value;
    }
    let temp: any[];
    if (this.customerMasterList && this.customerMasterList?.length > 0) {
      temp = this.customerMasterList.filter((option: any) =>
        option.name.toLowerCase().includes(filterValue)
      );
      return (this.options = temp.slice(0, 30));
    } else {
      return this.customerMasterList;
    }
  }

  selectEvent(event: any): void {
    console.log('event: ', event);
    this.optionSelected.emit(event);
  }

  setValue(value: string) {
    let temp = this.customerMasterList?.filter((x) => x.name === value);
    if (temp && temp.length > 0) {
      this.selectedCustomer.setValue(temp[0]);
    }
  }

  resetControl(): void {
    this.selectedCustomer.reset();
  }
}
