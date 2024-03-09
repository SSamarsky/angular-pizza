import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzaListComponent } from './pizza-list.component';
import { PizzaItemComponent } from '../pizza-item/pizza-item.component';
import { PizzaRoutingModule } from './pizza-list-routing.module';


@NgModule({
  imports: [CommonModule, PizzaRoutingModule],
  exports: [PizzaListComponent, PizzaItemComponent],
  declarations: [PizzaListComponent, PizzaItemComponent],
  providers: [],
})
export class PizzaListModule { }
