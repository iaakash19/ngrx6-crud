import { Pizza } from "./../../models/pizza.model";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import * as fromRoot from "../../../store"; // whole app
import * as fromFeature from "../reducers"; //products
import * as fromPizzas from "../reducers/pizzas.reducer"; // pizzas

// this returns pizza state
export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => {
    return state.pizzas;
  }
);

// get all pizzas
export const getAllPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(getAllPizzasEntities, entities => {
  return Object.keys(entities).map(id => {
    return entities[id];
  });
});
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);

export const getSelectedPizza = createSelector(
  getAllPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
);
