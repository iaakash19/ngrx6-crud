import { Pizza } from './../../models/pizza.model';
import * as fromPizzaActions from '../actions';

export interface PizzaState {
  pizzas: Pizza[],
  loaded: boolean,
  loading: boolean
}

export const initialState: PizzaState = {
  pizzas: [],
  loaded: false,
  loading: false
}

export function reducer(
  state = initialState,
  action: fromPizzaActions.PizzasAction
): PizzaState {
  switch (action.type) {

    case fromPizzaActions.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      }
    }

    case fromPizzaActions.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;
      console.log('pizzas:::', pizzas);
      return { ...state, loading: false, loaded: true, pizzas };
    }

    case fromPizzaActions.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
  }
  return state;
}


// Helper fn's for Reducer
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.pizzas;
