import { Component, OnDestroy, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  Customer,
  CustomerListResponse,
  CustomersService,
} from '../../customers/service/customers.service';
import { Subject, takeUntil } from 'rxjs';
import {
  CityRateService,
  RateListResponse,
  Rates,
} from '../service/city-rate.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-rate-details',
  templateUrl: './rate-details.component.html',
  styleUrls: ['./rate-details.component.scss'],
})
export class RateDetailsComponent implements OnInit, OnDestroy {
  public isDefaultNavActive = true;
  public surfaceList: Rates[] = [];
  public airList: Rates[] = [];
  public railList: Rates[] = [];
  public addEditRateID: number = 0;

  //formFields
  public selectedCustomer!: Customer;
  public transportationMode: string | undefined = 'surface';
  public selectedCity: any;
  public minWeight: any;
  public ratePerKG: any;
  public ratePerPiece: any;
  // end

  faEdit = faEdit;
  faTrash = faTrash;

  public customerList: Customer[] | undefined = [];
  private customerSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private customersService: CustomersService,
    private tosterService: ToastrService,
    private modalService: NgbModal,
    private cityRateService: CityRateService
  ) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  ngOnDestroy(): void {
    this.customerSubscription$.next(true);
    this.customerSubscription$.unsubscribe();
  }

  public onCustomerSelect(): void {
    if(this.selectedCustomer) {
      this.selectedCity = this.selectedCustomer.city?.toUpperCase();
      this.getRateByCustomer();
    }
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
      .getRatesByCustomer(this.selectedCustomer.customerId)
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: RateListResponse) => {
          if (response.rates && response.rates?.length > 0) {
            console.log('response.rates: ', response.rates);
            this.surfaceList = response.rates.filter(x => x.transportationMode === 'surface');
            this.airList = response.rates.filter(x => x.transportationMode === 'air');
            this.railList = response.rates.filter(x => x.transportationMode === 'rail');
          }
        },
        error: (e) => console.error(e),
        complete: () => {},
      });
  }

  public enableSave(): boolean {
    let isEnabled = false;
    if (
      this.selectedCustomer &&
      this.transportationMode &&
      this.selectedCity &&
      (this.ratePerKG || this.ratePerPiece)
    ) {
      return (isEnabled = true);
    } else {
      return (isEnabled = false);
    }
  }

  onSave(): void {
    let rateRequest: Rates = {
      customerId: this.selectedCustomer.customerId,
      city: this.selectedCity,
      transportationMode: this.transportationMode,
      minWeight: this.minWeight,
      ratePerKg: this.ratePerKG,
      ratePerPiece: this.ratePerPiece,
    };

    if (this.addEditRateID > 0) {
      rateRequest.rateId = this.addEditRateID;
    }
    this.cityRateService
      .addUpdateRate(rateRequest)
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: any) => {
          console.log('response: ', response);
          this.tosterService.success('Success', 'Rate saved.');
        },
        error: (e) =>
          this.tosterService.error('Error', 'Something goes wrong!.'),
        complete: () => {
          this.resetForm();
        },
      });
  }

  public onEditClick(rate: Rates): void {
    this.minWeight = rate.minWeight;
    this.ratePerKG = rate.ratePerKg;
    this.ratePerPiece = rate.ratePerPiece;
    this.transportationMode = rate.transportationMode;
  }

  public onDeleteRate(rate: Rates): void {
    this.openConfirmationDialog(rate);
  }

  openConfirmationDialog(rate: Rates) {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.message = 'Are you sure you want to delete?';

    modalRef.componentInstance.confirmed.subscribe((confirmed: boolean) => {
      if (confirmed) {
        if (rate.rateId && rate.rateId > 0) {
          this.cityRateService
            .deleteRateById(rate.rateId)
            .pipe(takeUntil(this.customerSubscription$))
            .subscribe({
              next: () => {
                // Call Rates by customer
                this.getRateByCustomer();
              },
              error: (e) => console.error(e),
              complete: () => console.info('complete'),
            });
        }
      } else {
      }
    });
  }

  public resetForm(): void {
    this.transportationMode = 'surface';
    this.selectedCity = '';
    this.minWeight = '';
    this.ratePerKG = '';
    this.ratePerPiece = '';
  }
}
