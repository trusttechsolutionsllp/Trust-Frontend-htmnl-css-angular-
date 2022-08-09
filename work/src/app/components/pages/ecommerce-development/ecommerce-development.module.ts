import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { EcommerceDevelopmentRoutingModule } from './ecommerce-development-routing.module';
import { EcommerceDevelopmentComponent } from './ecommerce-development.component';
import { SharedModule } from '../../shared/shared.module';
import { CotentEcommerceComponent } from './cotent-ecommerce/cotent-ecommerce.component'


@NgModule({
  declarations: [EcommerceDevelopmentComponent, CotentEcommerceComponent],
  imports: [
    CommonModule,
    EcommerceDevelopmentRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class EcommerceDevelopmentModule { }
