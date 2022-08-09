import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDetailsComponent } from './service-details.component';
// import { ServicesV2Component } from '../services-v2/services-v2.component';

const routes: Routes = [{ path: '', component: ServiceDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDetailsRoutingModule { }
