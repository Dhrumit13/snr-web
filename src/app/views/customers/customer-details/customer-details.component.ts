import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  Customer,
  CustomerListResponse,
  CustomersService,
} from '../service/customers.service';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SnrAutoCompleteComponent } from '../../common/snr-auto-complete/snr-auto-complete.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit, OnDestroy {

  @ViewChild('autocomplete') autocomplete!: SnrAutoCompleteComponent;

  public addEditCustomerID: number = 0;

  customerForm!: FormGroup;

  private customerSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private customerService: CustomersService,
    private tosterService: ToastrService
  ) {}

  ngOnInit() {
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

  private createForm(): void {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [''],
      mobile: ['', [Validators.required]],
      address: [''],
      city: [''],
      state: [''],
      isActive: [true],
      gstNo: [''],
      cgst: [''],
      sgst: [''],
      igst: ['']
    });
  }

  public onBackClick(): void {
    this.router.navigate(['customers']);
  }

  handleCitySelected(item: any) {
    this.customerForm.controls['city'].setValue(item.name);
  }

  // Method to submit the form
  onSubmit() {
    if (this.customerForm.valid) {
      // Form is valid, handle the submission logic here
      this.addUpdateCustomer(this.customerForm.value);
    } else {
      // Form is invalid, mark all fields as touched to display error messages
      this.customerForm.markAllAsTouched();
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
            this.customerForm.setValue(response.customers[0]);
            if(response.customers[0].city) {
              this.autocomplete.setValue(response.customers[0].city);
            }
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
        error: (e) => this.tosterService.error('Error', 'Something goes wrong!.'),
        complete: () => {
          this.customerForm.reset();
        },
      });
  }
}
