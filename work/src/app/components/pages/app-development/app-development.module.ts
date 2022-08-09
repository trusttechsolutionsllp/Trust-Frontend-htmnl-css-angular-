import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppDevelopmentRoutingModule } from './app-development-routing.module';
import { AppDevelopmentComponent } from './app-development.component'
import { SharedModule } from '../../shared/shared.module';
import { AppcontentComponent } from './appcontent/appcontent.component';


@NgModule({
  declarations: [AppDevelopmentComponent, AppcontentComponent,],
  imports: [
    CommonModule,
    AppDevelopmentRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class AppDevelopmentModule { }
