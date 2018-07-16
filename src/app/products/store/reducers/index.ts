import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzaReducer from "./pizzas.reducer";
import * as fromToppingreducer from './toppings.reducer';

export interface ProductsState {
  pizzas: fromPizzaReducer.PizzaState;
  toppings: fromToppingreducer.ToppingsState
}

export const reducers: ActionReducerMap<ProductsState> = { pizzas: fromPizzaReducer.reducer, toppings: fromToppingreducer.reducer };

// For whole lazy loaded module
export const getProductsState = createFeatureSelector<ProductsState>('products');
