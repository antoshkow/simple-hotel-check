import ActionTypes from '../types';
import { HotelsAction, IHotelsState } from '../../constants/interfaces';

const initialState: IHotelsState = {
  hotels: [],
  savedHotels: [],
  savedHotelsId: [],
  check: {
    location: '',
    in: '',
    out: ''
  }
}

export const hotelsReducer = (state = initialState, action: HotelsAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_HOTELS:
      return { ...state, hotels: action.payload };
    case ActionTypes.SEARCH_HOTEL:
      return { ...state, check: action.payload };
    case ActionTypes.LIKE_HOTEL:
      return {
        ...state,
        savedHotels: [action.payload, ...state.savedHotels]
      }
    case ActionTypes.SAVE_HOTEL_ID:
      return {
        ...state,
        savedHotelsId: [action.payload, ...state.savedHotelsId]
      }
    case ActionTypes.UNLIKE_HOTEL:
      return {
        ...state,
        savedHotels: state.savedHotels.filter(hotel => {
          return hotel !== action.payload
        })
      }
    case ActionTypes.REMOVE_HOTEL_ID:
      return {
        ...state,
        savedHotelsId: state.savedHotelsId.filter(id => {
          return id !== action.payload
        })
      }
    default:
      return state;
  }
}
