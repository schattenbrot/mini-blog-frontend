import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const loginUser = (userId: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.LOGIN, payload: userId });
  };
};

export const logoutUser = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.LOGOUT });
  };
};
