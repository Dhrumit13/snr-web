import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CityRateRoutingModule } from './city-rate-routing.module';
import { CityRateComponent } from './city-rate.component';

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
import { RateDetailsComponent } from './rate-details/rate-details.component';
import { CityRateService } from './service/city-rate.service';

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
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CityRateService]
})
export class CityRateModule {}