import { makeRequest } from '../request';

export const myRepos = ({owner}) => {
  return makeRequest({
    url: `/users/${owner}/repos`,
    headers: {
      Authorization: `token ${localStorage.getItem('token')}`,
    },
  });
};
