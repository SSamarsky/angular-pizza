import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PizzaListModule } from './components/pizza-list/pizza-list.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainComponent,
    CatalogComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PizzaListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
