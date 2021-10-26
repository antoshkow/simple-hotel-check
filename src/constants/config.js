export const checkResponse = res => {
  if (res.ok) {
    return res.json();
  }
  Promise.reject(`Ошибка: ${res.status}`);
}

export const cyrillicPattern = /[\u0400-\u04FF]/;
export const cyrillicErrorMsg = 'Не используйте кириллицу!';
