import {
  ON_RATING_FILTER, OFF_RATING_FILTER,
  ON_COST_FILTER, OFF_COST_FILTER
} from './types';

const initialState = {
  isRatingOn: true,
  isCostOn: null
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_RATING_FILTER:
      return { ...state, isRatingOn: true, isCostOn: null }
    case OFF_RATING_FILTER:
      return { ...state, isRatingOn: false, isCostOn: null }
    case ON_COST_FILTER:
      return { ...state, isCostOn: true, isRatingOn: null }
    case OFF_COST_FILTER:
      return { ...state, isCostOn: false, isRatingOn: null }
    default: return state;
  }
}
