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
import { ReceiversComponent } from './receivers.component';
import { ReceiverDetailsComponent } from './receiver-details/receiver-details.component';
import { ReceiversRoutingModule } from './receivers-routing.module';
import { ReceiversService } from './services/receivers.service';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ReceiversComponent, ReceiverDetailsComponent],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    IconModule,
    GridModule,
    FormModule,
    FontAwesomeModule,
    ReceiversRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonSNRModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [ReceiversService],
})
export class ReceiversModule {}
