import { Component, OnInit } from '@angular/core';
import { faPrint, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-consignment-preview',
  templateUrl: './consignment-preview.component.html',
  styleUrls: ['./consignment-preview.component.scss']
})
export class ConsignmentPreviewComponent implements OnInit {
  faXmark= faXmark;
  faPrint = faPrint;
  constructor() { }

  ngOnInit() {
  }

}
