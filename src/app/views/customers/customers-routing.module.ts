import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    data: {
      title: 'Customers',
    },
  },
  {
    path: 'customer-details/:id',
    component: CustomerDetailsComponent,
    data: {
      title: 'Customers',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
