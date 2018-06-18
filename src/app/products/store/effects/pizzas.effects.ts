import { PizzaService } from "./../../containers/products/services/pizzas.service";
import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import * as fromPizzaActions from "../actions";

import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class PizzaEffects {
  constructor(private actions$: Actions, private pizzaService: PizzaService) {}

  @Effect()
  loadPizza$ = this.actions$.ofType(fromPizzaActions.LOAD_PIZZAS).pipe(switchMap(() => {
        return this.pizzaService.getPizzas().pipe(
          map((pizzas:any) => new fromPizzaActions.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new fromPizzaActions.LoadPizzasFail(error)))
        )
    })
  )
}
