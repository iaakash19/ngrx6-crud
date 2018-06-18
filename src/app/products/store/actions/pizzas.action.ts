/*Action Definations for Pizza*/
import { Action } from "@ngrx/store"; // To have Action Interface
import { Pizza } from "./../../models/pizza.model";

// Constants Definition
export const LOAD_PIZZAS = "[Products] Load Pizzas";
export const LOAD_PIZZAS_FAIL = "[Products] Load Pizzas Fail";
export const LOAD_PIZZAS_SUCCESS = "[Products] Load Pizzas Success";

// Define Actions
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

//action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
