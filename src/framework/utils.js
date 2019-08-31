import dayjs from 'dayjs';

export const request = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => {
      throw new Error(error);
    });
