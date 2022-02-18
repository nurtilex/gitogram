import { makeRequest } from '../request';

export const getFollowingRepos = () => {
  return makeRequest({
    url: `/user/starred`,
    headers: {
      Authorization: `token ${localStorage.getItem('token')}`,
    },
  });
};
