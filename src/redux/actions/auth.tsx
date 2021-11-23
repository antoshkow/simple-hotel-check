import ActionTypes from '../types';

export const handleLogin = (value: string) => {
  return {
    type: ActionTypes.LOGIN,
    payload: value
  }
}

export const handleLogout = () => {
  return {
    type: ActionTypes.LOGOUT
  }
}
