import ActionTypes from '../types';
import { AuthAction, IAuthState } from '../../constants/interfaces';

const initialState: IAuthState = {
  isLoggedIn: false,
  user: ''
}

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        isLoggedIn: true,
        user: action.payload
      }
    case ActionTypes.LOGOUT:
      return {
        isLoggedIn: false,
        user: ''
      }
    default:
      return state;
  }
}
