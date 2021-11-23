import ActionTypes from '../types';
import { FilterAction, IFilterState } from '../../constants/interfaces';

const initialState: IFilterState = {
  isRatingOn: true,
  isCostOn: null
}

export const filterReducer = (state = initialState, action: FilterAction) => {
  switch (action.type) {
    case ActionTypes.ON_RATING_FILTER:
      return { ...state, isRatingOn: true, isCostOn: null }
    case ActionTypes.OFF_RATING_FILTER:
      return { ...state, isRatingOn: false, isCostOn: null }
    case ActionTypes.ON_COST_FILTER:
      return { ...state, isCostOn: true, isRatingOn: null }
    case ActionTypes.OFF_COST_FILTER:
      return { ...state, isCostOn: false, isRatingOn: null }
    default:
      return state;
  }
}
