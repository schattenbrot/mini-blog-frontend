import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState = "";

const userReducer = (state: string = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return action.payload;
    case ActionType.LOGIN:
      return "";
    default:
      return state;
  }
};

export default userReducer;
