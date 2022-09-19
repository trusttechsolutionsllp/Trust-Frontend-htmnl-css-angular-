import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mt4EssentialsRoutingModule } from './mt4-essentials-routing.module';
import { Mt4EssentialsComponent } from './mt4-essentials.component';
import { SharedModule } from '../../shared/shared.module'; 
import { Mt4OneComponent } from './mt4-one/mt4-one.component';
import { Mt4TwoComponent } from './mt4-two/mt4-two.component';

@NgModule({
  declarations: [Mt4EssentialsComponent, Mt4OneComponent, Mt4TwoComponent],
  imports: [
    CommonModule,
    Mt4EssentialsRoutingModule,
    SharedModule
  ]
})
export class Mt4EssentialsModule { }
