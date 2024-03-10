import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CityRateRoutingModule } from './city-rate-routing.module';
import { CityRateComponent } from './city-rate.component';

import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  TableModule,
  TabsModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RateDetailsComponent } from './rate-details/rate-details.component';
import { CityRateService } from './service/city-rate.service';
import { CommonSNRModule } from '../common/snr-common.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CityRateComponent, RateDetailsComponent],
  imports: [
    CityRateRoutingModule,
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    IconModule,
    GridModule,
    FormModule,
    FormsModule,
    TabsModule,
    NavModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonSNRModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [CityRateService],
})
export class CityRateModule {}
