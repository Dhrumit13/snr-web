import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityRateComponent } from './city-rate.component';
import { RateDetailsComponent } from './rate-details/rate-details.component';

const routes: Routes = [
  {
    path: '',
    component: CityRateComponent,
    data: {
      title: 'City Rates',
    },
  },
  {
    path: 'rate-details/:id',
    component: RateDetailsComponent,
    data: {
      title: 'City Rates',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityRateRoutingModule {}
