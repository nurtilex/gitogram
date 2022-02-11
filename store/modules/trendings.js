import { getTrandings } from '../../src/api/rest/trandings';
import { getReadme } from '../../src/api/rest/readme';

export default {
  namespaced: true,
  state: {
    data: [],
    currentSlide: 0,
  },
  mutations: {
    updateCurrentSlide(state, payload) {
      state.currentSlide = payload;
    },
    setReadme(state, payload) {
      state.data = state.data.map((repo) => {
        if (repo.id === payload.id) {
          repo.readme = payload.content;
        }

        return repo;
      });
    },
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find((item) => item.id === id);
    },
  },
  actions: {
    async fetchTrendings(store) {
      try {
        const {
          data: { items },
        } = await getTrandings();
        store.state.data = items;
      } catch (e) {
        console.log(e);
      }
    },
    async fetchReadme({ commit, getters }, { id, owner, repo }) {
      const currentRepo = getters.getRepoById(id);
      if (currentRepo.readme !== undefined) return;
      try {
        const { data } = await getReadme({ owner, repo });
        commit('setReadme', { id, content: data });
        // console.log(data, id);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
