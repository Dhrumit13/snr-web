import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  faEdit,
  faSave,
  faTrash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
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
import { SnrAutoCompleteComponent } from '../../common/snr-auto-complete/snr-auto-complete.component';

@Component({
  selector: 'app-rate-details',
  templateUrl: './rate-details.component.html',
  styleUrls: ['./rate-details.component.scss'],
})
export class RateDetailsComponent implements OnInit, OnDestroy {
  @ViewChild('autocomplete') autocomplete!: SnrAutoCompleteComponent;

  public isDefaultNavActive = true;
  public surfaceList: Rates[] = [];
  public airList: Rates[] = [];
  public railList: Rates[] = [];
  public addEditRateID: number | undefined | null;

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
  faSave = faSave;
  faXmark = faXmark;

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

  handleCitySelected(item: any) {
    this.selectedCity = item.name;
    console.log('this.selectedCity: ', this.selectedCity);
  }

  public onCustomerSelect(): void {
    if (this.selectedCustomer) {
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
            this.surfaceList = response.rates.filter(
              (x) => x.transportationMode === 'surface'
            );
            this.airList = response.rates.filter(
              (x) => x.transportationMode === 'air'
            );
            this.railList = response.rates.filter(
              (x) => x.transportationMode === 'rail'
            );
          } else {
            this.surfaceList = [];
            this.airList = [];
            this.railList = [];
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
      rateId:
        this.addEditRateID && this.addEditRateID > 0
          ? this.addEditRateID
          : null,
      customerId: this.selectedCustomer.customerId,
      city: this.selectedCity,
      transportationMode: this.transportationMode,
      minWeight: this.minWeight,
      ratePerKg: this.ratePerKG ? this.ratePerKG : null,
      ratePerPiece: this.ratePerPiece ? this.ratePerPiece : null,
    };

    this.cityRateService
      .addUpdateRate(rateRequest)
      .pipe(takeUntil(this.customerSubscription$))
      .subscribe({
        next: (response: any) => {
          this.tosterService.success('Success', 'Rate saved.');
          this.getRateByCustomer();
        },
        error: (e) =>
          this.tosterService.error('Error', 'Something goes wrong!.'),
        complete: () => {
          this.resetForm();
        },
      });
  }

  public onEditClick(rate: Rates, index: number): void {
    this.addEditRateID = rate.rateId;
    this.minWeight = rate.minWeight;
    this.ratePerKG = rate.ratePerKg;
    this.ratePerPiece = rate.ratePerPiece;
    this.transportationMode = rate.transportationMode;
    // this.selectedCity = rate.city;
    if (rate.city) {
      this.autocomplete.setValue(rate.city);
    }

    switch (rate.transportationMode) {
      case 'surface':
        this.surfaceList.splice(index, 1);
        break;
      case 'air':
        this.airList.splice(index, 1);
        break;
      case 'rail':
        this.railList.splice(index, 1);
        break;

      default:
        break;
    }
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
    this.autocomplete.resetControl();
    this.minWeight = '';
    this.ratePerKG = '';
    this.ratePerPiece = '';
    if (this.selectedCustomer) {
      this.getRateByCustomer();
    }
  }
}
