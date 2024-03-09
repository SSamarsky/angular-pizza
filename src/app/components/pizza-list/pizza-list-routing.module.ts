import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './pizza-list.component';
import { PizzaItemComponent } from '../pizza-item/pizza-item.component';
import { ErrorComponent } from '../pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: PizzaListComponent
  },
  {
    path: ':id',
    component: PizzaItemComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
