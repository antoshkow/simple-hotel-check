import { SHOW_PRELOADER, HIDE_PRELOADER } from './types';

const initialState = {
  isLoading: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRELOADER:
      return { ...state, isLoading: true };
    case HIDE_PRELOADER:
      return { ...state, isLoading: false };
    default: return state;
  }
}
