import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormModule } from '@coreui/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { CityNameService } from '../../services/city-name.service';

import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AutoCompleteCityComponent } from './auto-complete-city/auto-complete-city.component';
import { AutoSelectCustomerComponent } from './auto-select-customer/auto-select-customer.component';
import { MatButtonModule } from '@angular/material/button';
import { AutoSelectReceiverComponent } from './auto-select-receiver/auto-select-receiver.component';

@NgModule({
  declarations: [
    AutoCompleteCityComponent,
    AutoSelectCustomerComponent,
    AutoSelectReceiverComponent,
  ],
  imports: [
    CommonModule,
    FormModule,
    FormsModule,
    FontAwesomeModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatButtonModule,
  ],
  providers: [CityNameService],
  exports: [
    AutoCompleteCityComponent,
    AutoSelectCustomerComponent,
    AutoSelectReceiverComponent,
  ],
})
export class CommonSNRModule {}
