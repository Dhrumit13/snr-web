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

@NgModule({
  declarations: [ConsignmentComponent, ConsignmentDetailComponent],
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
  ],
  providers: [],
})
export class ConsignmentModule {}
