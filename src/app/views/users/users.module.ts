import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
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
import { CustomersService } from '../customers/service/customers.service';
import { UsersComponent } from './users.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';

@NgModule({
  declarations: [UsersComponent, UsersDetailComponent],
  imports: [
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
    UsersRoutingModule
  ], providers: [CustomersService],
})
export class UsersModule { }
