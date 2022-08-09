import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mt4EssentialsComponent } from './mt4-essentials.component';

const routes: Routes = [{ path: '', component: Mt4EssentialsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mt4EssentialsRoutingModule { }
