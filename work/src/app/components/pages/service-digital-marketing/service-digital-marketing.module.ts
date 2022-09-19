import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDigitalMarketingRoutingModule } from './service-digital-marketing-routing.module';
import { ServiceDigitalMarketingComponent } from './service-digital-marketing.component';
import { SharedModule } from '../../shared/shared.module';
import { DigitalOneComponent } from './digital-one/digital-one.component';
import { DigitalTwoComponent } from './digital-two/digital-two.component'; 


@NgModule({
  declarations: [ServiceDigitalMarketingComponent, DigitalOneComponent, DigitalTwoComponent],
  imports: [
    CommonModule,
    ServiceDigitalMarketingRoutingModule,
    SharedModule
  ]
})
export class ServiceDigitalMarketingModule { }
