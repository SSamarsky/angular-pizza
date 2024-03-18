import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})
export class PizzaListComponent implements OnInit {
  public itemList$?: Observable<Pizza[]>;

  constructor(private router: Router, private root: ActivatedRoute, private request: RequestService) {}

  public pizzaList?: Pizza[];

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], {relativeTo: this.root});
  }

  ngOnInit(): void {
    this.itemList$ = this.request.getPizzaList();
    this.itemList$.subscribe((m) => this.pizzaList = m)
  }
}
