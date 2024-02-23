import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { CityRateRoutingModule } from './city-rate-routing.module';
import { CityRateComponent } from './city-rate.component';

@NgModule({
  declarations: [
   CityRateComponent
  ],
  imports: [
    CommonModule,
    CityRateRoutingModule,
    ReactiveFormsModule
  ]
})
export class CityRateModule {
}
