import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesV2RoutingModule } from './services-v2-routing.module';
import { ServicesV2Component } from './services-v2.component';
import { SharedModule } from '../../shared/shared.module';
import { StyleoneComponent } from './styleone/styleone.component';
import { StyletwoComponent } from './styletwo/styletwo.component';
// import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [ServicesV2Component, StyleoneComponent, StyletwoComponent],
  imports: [
    CommonModule,
    ServicesV2RoutingModule,
    SharedModule
  ]
})
export class ServicesV2Module { }
