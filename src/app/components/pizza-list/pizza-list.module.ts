import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzaListComponent } from './pizza-list.component';
import { PizzaItemComponent } from '../pizza-item/pizza-item.component';
import { PizzaRoutingModule } from './pizza-list-routing.module';
import { RequestService } from '../../services/request.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [CommonModule, PizzaRoutingModule, HttpClientModule],
  exports: [PizzaListComponent, PizzaItemComponent],
  declarations: [PizzaListComponent, PizzaItemComponent],
  providers: [RequestService],
})
export class PizzaListModule { }
