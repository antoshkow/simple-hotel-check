import {
  FETCH_HOTELS, SEARCH_HOTEL, LIKE_HOTEL,
  UNLIKE_HOTEL, SAVE_HOTEL_ID, REMOVE_HOTEL_ID
} from './types';

const initialState = {
  hotels: [],
  savedHotels: [],
  savedHotelsId: [],
  check: {
    location: '',
    in: '',
    out: ''
  }
}

export const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOTELS:
      return { ...state, hotels: action.payload };
    case SEARCH_HOTEL:
      return { ...state, check: action.payload };
    case LIKE_HOTEL:
      return {
        ...state,
        savedHotels: [action.payload, ...state.savedHotels]
      }
    case SAVE_HOTEL_ID:
      return {
        ...state,
        savedHotelsId: [action.payload, ...state.savedHotelsId]
      }
    case UNLIKE_HOTEL:
      return {
        ...state,
        savedHotels: state.savedHotels.filter(hotel => {
          return hotel !== action.payload
        })
      }
    case REMOVE_HOTEL_ID:
      return {
        ...state,
        savedHotelsId: state.savedHotelsId.filter(id => {
          return id !== action.payload
        })
      }
    default: return state;
  }
}
