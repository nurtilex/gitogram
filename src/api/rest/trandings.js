import { makeRequest } from '../request';

const addZero = (value) => (value < 10 ? `0${value}` : value);

export const getTrandings = (lang = 'javascript') => {
  const params = new URLSearchParams();

  const weekS = 7 * 24 * 60 * 60 * 1000;
  const weekAgo = new Date(Date.now() - weekS);
  const formatted = [
    weekAgo.getFullYear(),
    addZero(weekAgo.getMonth() + 1),
    addZero(weekAgo.getDate()),
  ].join('-');

  params.append('order', 'desc');
  params.append('sort', 'stars');
  params.append('per_page', 10);
  params.append('q', `language:${lang} created:>${formatted}`);

  return makeRequest({ url: `/search/repositories?${params}` });
};
