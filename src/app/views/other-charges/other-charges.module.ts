import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
import { CommonSNRModule } from '../common/snr-common.module';
import { OtherChargesComponent } from './other-charges.component';
import { OtherChargesDetailsComponent } from './other-charges-details/other-charges-details.component';
import { OtherChargesRoutingModule } from './other-charges-routing.module';
import { OtherChargesService } from './services/other-charges.service';

@NgModule({
  declarations: [OtherChargesComponent, OtherChargesDetailsComponent],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    IconModule,
    GridModule,
    FormModule,
    FontAwesomeModule,
    OtherChargesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonSNRModule,
  ],
  providers: [OtherChargesService],
})
export class OtherChargesModule {}
