import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Customer,
  CustomerListResponse,
  CustomersService,
} from '../service/customers.service';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  public addEditCustomerID: number = 0;
  faArrowLeft = faArrowLeft;

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
      cGST: [''],
      sGST: [''],
      iGST: ['']
    });
  }

  public onBackClick(): void {
    this.router.navigate(['customers']);
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
