import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiversComponent } from './receivers.component';
import { ReceiverDetailsComponent } from './receiver-details/receiver-details.component';

const routes: Routes = [
  {
    path: '',
    component: ReceiversComponent,
    data: {
      title: 'Receivers',
    },
  },
  {
    path: 'receiver-details/:id',
    component: ReceiverDetailsComponent,
    data: {
      title: 'Receivers',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiversRoutingModule {}
