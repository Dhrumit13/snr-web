import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, map, startWith, takeUntil } from 'rxjs';
import { ReceiverListResponse, ReceiversService } from './../../receivers/services/receivers.service';

@Component({
  selector: 'app-auto-select-receiver',
  templateUrl: './auto-select-receiver.component.html',
  styleUrls: ['./auto-select-receiver.component.scss']
})
export class AutoSelectReceiverComponent implements OnInit {
  @Output() optionSelected = new EventEmitter<string>();
  public customerMasterList: any[] = [];

  private receiverSubscription$: Subject<boolean> = new Subject<boolean>();

  options: any[] = [];
  filteredOptions!: Observable<any[]>;
  selectedReceiver = new FormControl();

  constructor(private receiverService: ReceiversService) {
    this.getAllReceivers();
  }

  ngOnInit() {
    this.filteredOptions = this.selectedReceiver.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private getAllReceivers(): void {
    this.receiverService
      .getAllReceivers()
      .pipe(takeUntil(this.receiverSubscription$))
      .subscribe({
        next: (response: ReceiverListResponse) => {
          if (response.receivers) {
            this.customerMasterList = response.receivers;
          }
        },
        error: (e) => console.error(e),
        complete: () => {},
      });
  }

  public displayProperty(value: any) {
    if (value) {
      return value.receiverName;
    }
  }

  private _filter(value: any): any[] {
    let filterValue = '';
    if (typeof value === 'object') {
      filterValue = value?.receiverName?.toLowerCase();
    } else if (value) {
      filterValue = value?.toLowerCase();
    } else {
      filterValue = value;
    }
    let temp: any[];
    if (this.customerMasterList && this.customerMasterList?.length > 0) {
      temp = this.customerMasterList.filter((option: any) =>
        option.receiverName.toLowerCase().includes(filterValue)
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
    let temp = this.customerMasterList?.filter((x) => x.receiverName === value);
    if (temp && temp.length > 0) {
      this.selectedReceiver.setValue(temp[0]);
    }
  }

  resetControl(): void {
    this.selectedReceiver.reset();
  }
}

