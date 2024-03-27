import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  TableModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CommonSNRModule } from '../common/snr-common.module';
import { AgGridModule } from 'ag-grid-angular';
import { ConsignmentComponent } from './consignment.component';
import { ConsignmentRoutingModule } from './consignment-routing.module';
import { ConsignmentDetailComponent } from './consignment-detail/consignment-detail.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatRadioModule } from '@angular/material/radio';
import { CityRateService } from '../city-rate/service/city-rate.service';
import { ConsignmentPreviewComponent } from './consignment-preview/consignment-preview.component';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { ConsignmentService } from './services/consignment.service';
@NgModule({
  declarations: [
    ConsignmentComponent,
    ConsignmentDetailComponent,
    ConsignmentPreviewComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    IconModule,
    GridModule,
    FormModule,
    FontAwesomeModule,
    ConsignmentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonSNRModule,
    AgGridModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    TextFieldModule,
    MatRadioModule,
    NgxBarcode6Module

  ],
  providers: [CityRateService, ConsignmentService],
})
export class ConsignmentModule {}
