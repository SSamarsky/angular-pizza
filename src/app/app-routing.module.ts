import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { ErrorComponent } from './components/pages/error/error.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'catalog',
    loadChildren: () => import('./components/pizza-list/pizza-list.module').then((m) => m.PizzaListModule)
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
