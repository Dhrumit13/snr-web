import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsignmentComponent } from './consignment.component';
import { ConsignmentDetailComponent } from './consignment-detail/consignment-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ConsignmentComponent,
    data: {
      title: 'Consignments',
    },
  },
  {
    path: 'consignment-details/:id',
    component: ConsignmentDetailComponent,
    data: {
      title: 'Consignments',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsignmentRoutingModule {}
