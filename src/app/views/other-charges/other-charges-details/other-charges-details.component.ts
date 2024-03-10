import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  Customer,
  CustomerListResponse,
  CustomersService,
} from '../../customers/service/customers.service';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-other-charges-details',
  templateUrl: './other-charges-details.component.html',
  styleUrls: ['./other-charges-details.component.scss']
})
export class OtherChargesDetailsComponent implements OnInit, OnDestroy {


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
      otherChargeName: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  public onBackClick(): void {
    this.router.navigate(['other-charges']);
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

