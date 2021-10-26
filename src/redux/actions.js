import {
  LOGIN, SEARCH_HOTEL, SHOW_PRELOADER,
  HIDE_PRELOADER, GET_HOTELS, LIKE_HOTEL,
  UNLIKE_HOTEL, SAVE_HOTEL_ID, REMOVE_HOTEL_ID,
  ON_RATING_FILTER, OFF_RATING_FILTER, ON_COST_FILTER,
  OFF_COST_FILTER, LOGOUT
} from './types';

export const handleLogin = value => {
  return {
    type: LOGIN,
    payload: value
  }
}

export const handleLogout = () => {
  return {
    type: LOGOUT
  }
}

export const showPreloader = () => {
  return {
    type: SHOW_PRELOADER
  }
}

export const hidePreloader = () => {
  return {
    type: HIDE_PRELOADER
  }
}

export const getHotels = (location, checkIn, checkOut) => {
  return {
    type: GET_HOTELS,
    payload: {
      location,
      checkIn,
      checkOut
    }
  }
}

export const searchHotels = (location, checkIn, checkOut) => {
  return {
    type: SEARCH_HOTEL,
    payload: {
      location,
      in: checkIn,
      out: checkOut
    }
  }
}

export const likeHotel = hotel => {
  return {
    type: LIKE_HOTEL,
    payload: hotel
  }
}

export const saveHotelId = id => {
  return {
    type: SAVE_HOTEL_ID,
    payload: id
  }
}

export const removeSaveHotelId = id => {
  return {
    type: REMOVE_HOTEL_ID,
    payload: id
  }
}

export const unlikeHotel = hotel => {
  return {
    type: UNLIKE_HOTEL,
    payload: hotel
  }
}

export const ratingFilterOn = () => {
  return {
    type: ON_RATING_FILTER
  }
}

export const ratingFilterOff = () => {
  return {
    type: OFF_RATING_FILTER
  }
}

export const costFilterOn = () => {
  return {
    type: ON_COST_FILTER
  }
}

export const costFilterOff = () => {
  return {
    type: OFF_COST_FILTER
  }
}
