import ActionTypes from '../types';

export const showPreloader = () => {
  return {
    type: ActionTypes.SHOW_PRELOADER
  }
}

export const hidePreloader = () => {
  return {
    type: ActionTypes.HIDE_PRELOADER
  }
}
