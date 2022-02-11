import { makeRequest } from '../request';

export const getRepos = () => {
  return makeRequest({
    url: `/user/starred`,
    headers: {
      Authorization: `token ${localStorage.getItem('token')}`,
    },
  });
};
