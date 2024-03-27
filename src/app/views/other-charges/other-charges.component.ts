import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faPlus,
  faSearch,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { ChargeListResponse, OtherCharge, OtherChargesService } from './services/other-charges.service';

@Component({
  selector: 'app-other-charges',
  templateUrl: './other-charges.component.html',
  styleUrls: ['./other-charges.component.scss']
})
export class OtherChargesComponent implements OnInit, OnDestroy {
  faPlus = faPlus;
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;
  public chargeList: OtherCharge[] | undefined = [];
  private chargeSubscription$: Subject<boolean> = new Subject<boolean>();

  colDefs: ColDef[] = [
    { field: 'otherChargeId', hide: true },
    { field: 'otherChargeName', flex: 1, filter: 'agSetColumnFilter' },
    { field: 'amount', flex: 1, filter: 'agSetColumnFilter' },
  ];

  constructor(
    private router: Router,
    private otherChargesService: OtherChargesService
  ) {}

  ngOnInit() {
    this.getAllCharges();
  }

  ngOnDestroy(): void {
    this.chargeSubscription$.next(true);
    this.chargeSubscription$.unsubscribe();
  }

  private getAllCharges(): void {
    this.otherChargesService
      .getAllCharges()
      .pipe(takeUntil(this.chargeSubscription$))
      .subscribe({
        next: (response: ChargeListResponse) => {
          this.chargeList = response.otherChargess;
        },
        error: (e) => console.error(e),
        complete: () => {},
      });
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
      this.onEditCharge(params.data);
    }

    // end

  public onAddCharge(): void {
    this.router.navigate(['snr/other-charges/other-charges-details', 0]);
  }

  public onEditCharge(charge: OtherCharge): void {
    this.router.navigate(['snr/other-charges/other-charges-details', charge.otherChargeId]);
  }
}
