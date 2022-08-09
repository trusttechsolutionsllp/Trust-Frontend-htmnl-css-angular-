import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDigitalMarketingComponent } from './service-digital-marketing.component';

const routes: Routes = [{ path: '', component: ServiceDigitalMarketingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDigitalMarketingRoutingModule { }
