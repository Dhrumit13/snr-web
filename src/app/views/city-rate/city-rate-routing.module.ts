import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityRateComponent } from './city-rate.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'City Rates',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'city-rate',
      },
      {
        path: 'city-rate',
        component: CityRateComponent,
        data: {
          title: 'City Rates',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityRateRoutingModule {}
