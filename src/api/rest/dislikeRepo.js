import { makeRequest } from '../request';

export const dislikeRepo = ({ owner, repo }) => {
  return makeRequest({
    method: 'DELETE',
    url: `/user/starred/${owner}/${repo}`,
    headers: {
      Authorization: `token ${localStorage.getItem('token')}`,
    },
  });
};
