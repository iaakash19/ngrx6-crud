import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzaReducer from "./pizzas.reducer";

export interface ProductsState {
  pizzas: fromPizzaReducer.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = { pizzas: fromPizzaReducer.reducer };


// Selectors

// For whole lazy loaded module
export const getProductsState = createFeatureSelector<ProductsState>('products');

// this returns pizza state
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => {
  return state.pizzas
});


// get all pizzas
export const getAllPizzasEntities = createSelector(getPizzaState, fromPizzaReducer.getPizzasEntities);

export const getAllPizzas = createSelector(getAllPizzasEntities, (entities) => {
  return Object.keys(entities).map(id => {
    return entities[id]
  })
});
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzaReducer.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzaReducer.getPizzasLoading);
