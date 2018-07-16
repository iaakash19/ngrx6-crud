import { Topping } from "./../../models/topping.model";
import * as fromToppings from "../actions/toppings.action";

export interface ToppingsState {
  entities: { [key: string]: Topping };
  loading: boolean;
  loaded: boolean;
}

export const initialState: ToppingsState = {
  entities: {},
  loading: false,
  loaded: false
};

export function reducer(
  state = initialState,
  action: fromToppings.ToppingsAction
): ToppingsState {
  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return { ...state, loading: true };
    }
    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings: Topping[] = action.payload;
      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return { ...entities, [topping.id]: topping };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      }
    }
    case  fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      }
    }
  }
  return state;
}

//helper fns
export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingLoaded = (state: ToppingsState) => state.loaded;
export const getToppingLoading = (state: ToppingsState) => state.loading;
