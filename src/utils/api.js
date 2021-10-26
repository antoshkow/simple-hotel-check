import { checkResponse } from '../constants/config';

export const getHotels = async (location, checkIn, checkOut) => {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}`, {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    }
  });
  return await checkResponse(res);
}
