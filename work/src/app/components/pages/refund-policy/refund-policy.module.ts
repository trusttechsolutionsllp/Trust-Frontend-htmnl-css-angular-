import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { RefundPolicyRoutingModule } from './refund-policy-routing.module';
import { RefundPolicyComponent } from './refund-policy.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [RefundPolicyComponent],
  imports: [
    CommonModule,
    RefundPolicyRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
}) 
export class RefundPolicyModule { }
