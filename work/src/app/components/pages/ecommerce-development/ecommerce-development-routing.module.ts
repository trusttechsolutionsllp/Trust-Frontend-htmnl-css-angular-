import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceDevelopmentComponent } from './ecommerce-development.component';

const routes: Routes = [{ path: '', component: EcommerceDevelopmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceDevelopmentRoutingModule { }
