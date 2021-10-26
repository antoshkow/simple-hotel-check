export const formatDate = date => {
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm
  let yyyy = date.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}

export const addDays = (date, days) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

export const formatDateWithEnMonth = date => {
  let check = new Date(date);
  const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = check.getDate();
  const month = check.getMonth();
  const year = check.getFullYear();
  return `${days} ${monthList[month]}, ${year}`;
}

export const formatDateWithRuMonth = date => {
  let check = new Date(date);
  const monthList = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const days = check.getDate();
  const month = check.getMonth();
  const year = check.getFullYear();
  return `${days} ${monthList[month]} ${year}`;
}

export const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 2];
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

export const handleIsLiked = (id, savedHotelsId) => {
  return savedHotelsId.some(e => e === id);
}

export const sortRatingFilterUp = data => {
  return data.slice().sort((a, b) => a.stars > b.stars ? -1 : 1);
}

export const sortRatingFilterDown = data => {
  return data.slice().sort((a, b) => a.stars > b.stars ? 1 : -1);
}

export const sortCostFilterUp = data => {
  return data.slice().sort((a, b) => b.priceAvg > a.priceAvg ? 1 : -1);
}

export const sortCostFilterDown = data => {
  return data.slice().sort((a, b) => b.priceAvg > a.priceAvg ? -1 : 1);
}
