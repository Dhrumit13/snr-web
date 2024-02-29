import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() message: string = 'Are you sure?';
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {

  }

  confirm() {
    this.confirmed.emit(true);
    this.activeModal.close();
  }

  cancel() {
    this.confirmed.emit(false);
    this.activeModal.dismiss();
  }
}
