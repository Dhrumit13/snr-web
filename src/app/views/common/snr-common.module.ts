import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormModule } from '@coreui/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SnrAutoCompleteComponent } from './snr-auto-complete/snr-auto-complete.component';
import { CityNameService } from '../../services/city-name.service';

@NgModule({
  declarations: [SnrAutoCompleteComponent],
  imports: [
    CommonModule,
    FormModule,
    FormsModule,
    FontAwesomeModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
  ],
  providers: [CityNameService],
  exports:[SnrAutoCompleteComponent]
})
export class CommonSNRModule {}
