import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  TableModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomersService } from './service/customers.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonSNRModule } from '../common/snr-common.module';

@NgModule({
  declarations: [CustomersComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    IconModule,
    GridModule,
    FormModule,
    FontAwesomeModule,
    CustomersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonSNRModule
  ],
  providers: [CustomersService],
})
export class CustomerModule {}
