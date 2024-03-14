import { ColDef } from 'ag-grid-community';
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
import { Receiver, ReceiverListResponse, ReceiversService } from './services/receivers.service';

@Component({
  selector: 'app-receivers',
  templateUrl: './receivers.component.html',
  styleUrls: ['./receivers.component.scss']
})
export class ReceiversComponent implements OnInit, OnDestroy {
  faPlus = faPlus;
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;
  colDefs: ColDef[] = [
    { field: 'receiverId', hide: true },
    { field: 'receiverName', flex: 1, filter: 'agSetColumnFilter' },
    { field: 'city', flex: 1, filter: 'agSetColumnFilter' },
    { field: 'mobile', flex: 1, filter: 'agSetColumnFilter' },
    { field: 'address', flex: 1, hide: true },
    { field: 'email', flex: 1, hide: true },
    { field: 'isActive', flex: 1, hide: true },
  ];
  public receiverList: Receiver[] | undefined = [];
  private receiverSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private receiversService: ReceiversService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAllReceivers();
  }

  ngOnDestroy(): void {
    this.receiverSubscription$.next(true);
    this.receiverSubscription$.unsubscribe();
  }

  private getAllReceivers(): void {
    this.receiversService
      .getAllReceivers()
      .pipe(takeUntil(this.receiverSubscription$))
      .subscribe({
        next: (response: ReceiverListResponse) => {
          this.receiverList = response.receivers;
        },
        error: (e) => console.error(e),
        complete: () => { },
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
    this.onEditReceiver(params.data);
  }
  // end

  public onAddReceiver(): void {
    this.router.navigate(['receivers/receiver-details', 0]);
  }

  public onEditReceiver(receiver: Receiver): void {
    this.router.navigate(['receivers/receiver-details', receiver.receiverId]);
  }


}
