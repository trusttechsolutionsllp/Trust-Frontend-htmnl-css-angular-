import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { TermsConditionsRoutingModule } from './terms-conditions-routing.module';
import { TermsConditionsComponent } from './terms-conditions.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TermsConditionsComponent],
  imports: [
    CommonModule,
    TermsConditionsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class TermsConditionsModule { }
