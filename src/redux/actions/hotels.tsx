import ActionTypes from '../types';

export const getHotels = (
  location: string, checkIn: string, checkOut: string
) => {
  return {
    type: ActionTypes.GET_HOTELS,
    payload: {
      location,
      checkIn,
      checkOut
    }
  }
}

export const searchHotels = (
  location: string, checkIn: string, checkOut: string
) => {
  return {
    type: ActionTypes.SEARCH_HOTEL,
    payload: {
      location,
      in: checkIn,
      out: checkOut
    }
  }
}

export const likeHotel = (hotel: string) => {
  return {
    type: ActionTypes.LIKE_HOTEL,
    payload: hotel
  }
}

export const saveHotelId = (id: number) => {
  return {
    type: ActionTypes.SAVE_HOTEL_ID,
    payload: id
  }
}

export const removeHotelId = (id: number) => {
  return {
    type: ActionTypes.REMOVE_HOTEL_ID,
    payload: id
  }
}

export const unlikeHotel = (hotel: string) => {
  return {
    type: ActionTypes.UNLIKE_HOTEL,
    payload: hotel
  }
}
