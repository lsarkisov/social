import {
  LOG_IN,
} from '../../const';
import { REQUEST, SUCCESS, FAILURE } from "../../const/requests";

const login = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN[REQUEST]:
      return Object.assign(
        {}, state, {
          userLogIn: false,
        },
      );
    case LOG_IN[SUCCESS]:
      return Object.assign(
        {}, state, {
          userLogIn: action.payload,
        },
      );
    case LOG_IN[FAILURE]:
      return Object.assign(
        {}, state, {
          userLogIn: false,
        },
      );
    default:
      return Object.assign(
        {}, state,
      );
  }
};

export default login;
