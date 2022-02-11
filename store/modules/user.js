import { getUser } from '../../src/api/rest/user';
import { getRepos } from '../../src/api/rest/repos';
import { getIssues } from '../../src/api/rest/issues';
import { likeRepo } from '../../src/api/rest/likeRepo';
import { dislikeRepo } from '../../src/api/rest/dislikeRepo';

export default {
  namespaced: true,
  state: {
    user: [],
    repos: [],
  },
  mutations: {},
  getters: {
    getIssuesOfRepo:
      (state) =>
      ({ id }) => {
        const repo = state.repos.find((r) => r.id === id);
        return repo.issues || null;
      },
  },
  actions: {
    async fetchUser(store) {
      try {
        const { data } = await getUser();
        store.state.user = data;
      } catch (e) {
        console.log(e);
      }
    },
    async fetchRepos(store) {
      try {
        const { data } = await getRepos();
        store.state.repos = data;
      } catch (e) {
        console.log(e);
      }
    },
    async fetchIssues(store, { owner, repo, id }) {
      try {
        const { data } = await getIssues({ owner, repo });
        const issues = data.map(({ id, title, user: { login } }) => ({
          id,
          title,
          login,
        }));
        store.state.repos = store.state.repos.map((repo) => {
          if (repo.id === id) {
            repo.issues = issues;
          }
          return repo;
        });
      } catch (e) {
        console.log(e);
      }
    },
    async likeRepo(store, { owner, repo }) {
      try {
        const { status } = await likeRepo({ owner, repo });
        console.log(status)
        await store.actions.fetchRepos();
      } catch (e) {
        console.log(e);
      }
    },
    async dislikeRepo(store, { owner, repo }) {
      try {
        await dislikeRepo({ owner, repo });
        await store.actions.fetchRepos();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
