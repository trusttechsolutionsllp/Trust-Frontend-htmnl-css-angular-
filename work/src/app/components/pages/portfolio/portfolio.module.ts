import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './item/item.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [PortfolioComponent, ContentComponent, ItemComponent, ContactComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PortfolioModule { }
