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
import {AutoCompleteCityComponent } from './auto-complete-city/auto-complete-city.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AutoCompleteCityComponent],
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
    MatButtonModule
  ],
  providers: [CityNameService],
  exports: [AutoCompleteCityComponent],
})
export class CommonSNRModule {}
