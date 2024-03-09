import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pizza } from '../../models/pizza';
import { pizzas } from '../../data/pizzas';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrl: './pizza-item.component.scss'
})
export class PizzaItemComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  public object?: Pizza;

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.object = pizzas[params['id']]
      })
  }
}
