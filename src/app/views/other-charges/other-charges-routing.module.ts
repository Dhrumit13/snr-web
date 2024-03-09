import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherChargesComponent } from './other-charges.component';
import { OtherChargesDetailsComponent } from './other-charges-details/other-charges-details.component';

const routes: Routes = [
  {
    path: '',
    component: OtherChargesComponent,
    data: {
      title: 'OtherCharges',
    },
  },
  {
    path: 'other-charges-details/:id',
    component: OtherChargesDetailsComponent,
    data: {
      title: 'OtherCharges',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherChargesRoutingModule {}
