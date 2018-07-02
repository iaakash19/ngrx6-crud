import { Pizza } from './../../models/pizza.model';
import { Component, OnInit } from '@angular/core';

// for Store
import { Store } from '@ngrx/store'
import * as fromStore from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {

  pizzas$: Observable<Pizza[]>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
  this.pizzas$ = this.store.select(fromStore.getAllPizzas); // loading initial state

    this.store.dispatch(new fromStore.LoadPizzas());
  }
}
