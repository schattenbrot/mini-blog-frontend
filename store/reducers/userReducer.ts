import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import dayjs from "dayjs";

interface UserState {
  user: string;
  cookieExpiration: dayjs.Dayjs;
}

const initialState: UserState = {
  user: "",
  cookieExpiration: dayjs(),
};

const userReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        user: action.payload,
        cookieExpiration: dayjs().add(24, "hour"),
      };
    case ActionType.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
