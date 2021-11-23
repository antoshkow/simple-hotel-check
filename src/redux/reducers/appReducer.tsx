import ActionTypes from '../types';
import { AppAction, IAppState } from '../../constants/interfaces';

const initialState: IAppState = {
  isLoading: false
}

export const appReducer = (state = initialState, action: AppAction): IAppState => {
  switch (action.type) {
    case ActionTypes.SHOW_PRELOADER:
      return { ...state, isLoading: true };
    case ActionTypes.HIDE_PRELOADER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
