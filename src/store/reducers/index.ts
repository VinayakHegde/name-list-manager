import { combineReducers } from "redux";
import * as AppTypes from "AppTypes";
import { isNull } from "util";
import { types } from "../actions";
import pick from "../../utils/pick";
import { IAppState } from "../../utils/interfaces";

export const initialState: IAppState = {
  list: [],
  random: null,
};

export const reducer = (
  state: IAppState = initialState,
  action: AppTypes.AppAction
) => {
  switch (action.type) {
    case types.ADD: {
      let random = state.random;
      if (!isNull(random)) {
        random += 1;
      }
      return {
        ...state,
        list: [action.payload, ...state.list],
        random,
      };
    }
    case types.REMOVE: {
      const prevList = [...state.list];
      prevList.splice(action.payload, 1);
      const list = prevList;
      let random = state.random;

      if (!isNull(random)) {
        if (random === action.payload) {
          random = null;
        } else if (random > action.payload) {
          random -= 1;
        }
      }

      return {
        ...state,
        list,
        random,
      };
    }
    case types.PICK: {
      const random = pick(state);
      return {
        ...state,
        random,
      };
    }
    default:
      return { ...state };
  }
};

export default combineReducers({
  state: reducer,
});
