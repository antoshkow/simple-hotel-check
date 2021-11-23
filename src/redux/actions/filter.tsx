import ActionTypes from '../types';

export const ratingFilterOn = () => {
  return {
    type: ActionTypes.ON_RATING_FILTER
  }
}

export const ratingFilterOff = () => {
  return {
    type: ActionTypes.OFF_RATING_FILTER
  }
}

export const costFilterOn = () => {
  return {
    type: ActionTypes.ON_COST_FILTER
  }
}

export const costFilterOff = () => {
  return {
    type: ActionTypes.OFF_COST_FILTER
  }
}
