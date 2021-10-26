import { LOGIN, LOGOUT } from './types';

const initialState = {
  isLoggedIn: false,
  user: ''
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true,
        user: action.payload
      }
    case LOGOUT:
      return {
        isLoggedIn: false,
        user: ''
      }
    default: return state;
  }
}
