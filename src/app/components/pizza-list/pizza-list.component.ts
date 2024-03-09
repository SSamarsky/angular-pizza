import { Component } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { pizzas } from '../../data/pizzas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})
export class PizzaListComponent {
  constructor(private router: Router, private root: ActivatedRoute) {}

  public pizzaList: Pizza[] = pizzas;

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], {relativeTo: this.root});
  }
}
