import { makeRequest } from '../request';

export const likeRepo = ({ owner, repo }) => {
  return makeRequest({
    method: 'PUT',
    url: `/user/starred/${owner}/${repo}`,
    headers: {
      Authorization: `token ${localStorage.getItem('token')}`,
    },
  });
};
