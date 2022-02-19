<template>
  <section class="profile">
    <topline>
      <template #headline>
        <headline :avatar_url="user.avatar_url" />
      </template>
    </topline>
    <div class="content">
      <div class="about">
        <h3 class="about__title">My profile</h3>
        <div class="about__user">
          <div class="about__img-wrapper">
            <img :src="user.avatar_url" alt="user img" class="about__img" />
          </div>
          <div class="about__info">
            <div class="about__login">{{ user.login }}</div>
            <div class="about__buttons">
              <span class="bold">{{ user.public_repos }}</span>
              <span class="light" @click="toggleCurrent('repos')">repos</span>
              <span class="bold">{{ repos?.length }}</span>
              <span class="light" @click="toggleCurrent('following')"
                >following</span
              >
            </div>
            <div class="about__name">{{ user.name }}</div>
          </div>
        </div>
      </div>
      <div class="content__body">
        <div class="content__header">
          <h2 class="content__title">{{ currentTitle }}</h2>
          <div class="content__counter">{{ currentCounter }}</div>
        </div>
        <div class="content__list">
          <div class="users" v-if="current.text === 'following'">
            <user
              v-for="repo in formateUsers(repos)"
              :key="repo.id"
              :data="repo"
              @unfollow="handleEmit"
            />
          </div>
          <div class="repos" v-else-if="current.text === 'repos'">
            <article-preview
              v-for="repo in formateRepos(user.public_repos_list)"
              :key="repo.id"
              :data="repo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import topline from '../../components/topline/topline.vue';
import headline from '../../components/headline/headline.vue';
import articlePreview from '../../components/articlePreview/articlePreview.vue';
import user from '../../components/user/user.vue';

import { useStore } from 'vuex';
import { reactive, computed } from 'vue';

export default {
  name: 'profile',
  components: { topline, headline, user, articlePreview },
  setup() {
    const store = useStore();
    console.log(store)

    const current = reactive({text: 'repos'});
    return {
      current,
      fetchUser: () => store.dispatch('user/fetchUser'),
      fetchReposOfUser: () => store.dispatch('user/fetchReposOfUser'),
      fetchRepos: () => store.dispatch('user/fetchRepos'),
      unfollow: () => store.dispatch('user/dislikeRepo'),
      formateRepos: (arr) => {
        return arr.map((item) => ({
          id: item.id,
          title: item.name,
          starsCount: item.stargazers_count,
          forksCount: item.forks_count,
          description: item.description,
        }));
      },
      formateUsers: (arr) => {
        return arr.map((item) => ({
          id: item.id,
          login: item.owner.login,
          name: item.name,
          avatar_url: item.owner.avatar_url,
        }));
      },
      toggleCurrent: (text) => {
        current.text = text;
        console.log(current.text)
      },
      handleEmit: ({ owner, repo }) => {
        this.unfollow({ owner, repo });
      },
      user: computed(() => store.state.user.user),
      repos: computed(() => store.state.user.repos),
      currentTitle: computed(() => {
        return current?.text === 'repos' ? 'Repositories' : 'Following';
      }),
      currentCounter: computed(function() {
        return current?.text === 'repos'
          ? store.state.user.user.public_repos
          : store.state.user.repos.length;
      }),
    };
  },

  // methods: {
  //   ...mapActions({
  //     fetchUser: 'user/fetchUser',
  //     fetchReposOfUser: 'user/fetchReposOfUser',
  //     fetchRepos: 'user/fetchRepos',
  //     unfollow: 'user/dislikeRepo',
  //   }),
  //   formateRepos(arr) {
  //     return arr.map((item) => ({
  //       id: item.id,
  //       title: item.name,
  //       starsCount: item.stargazers_count,
  //       forksCount: item.forks_count,
  //       description: item.description,
  //     }));
  //   },
  //   formateUsers(arr) {
  //     return arr.map((item) => ({
  //       id: item.id,
  //       login: item.owner.login,
  //       name: item.name,
  //       avatar_url: item.owner.avatar_url,
  //     }));
  //   },
  //   toggleCurrent(text) {
  //     this.current = text;
  //   },
  //   handleEmit({ owner, repo }) {
  //     this.unfollow({ owner, repo });
  //   },
  // },
  // computed: {
  //   ...mapState({
  //     user: (state) => state.user.user,
  //     repos: (state) => state.user.repos,
  //   }),
  //   currentTitle() {
  //     return this.current === 'repos' ? 'Repositories' : 'Following';
  //   },
  //   currentCounter() {
  //     return this.current === 'repos'
  //       ? this.user.public_repos
  //       : this.repos.length;
  //   },
  // },
  async created() {
    await this.fetchUser();
    await this.fetchRepos();
    await this.fetchReposOfUser();
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.c-topline {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 5rem;
  background-color: #fafafa;
  box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
  border-bottom: 1px solid gray;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  flex-grow: 1;
  padding: 0 12.5%;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 35%;
  height: 100%;
  border-right: 1px solid gray;
  padding: 2rem 1rem;
}

.about__title {
  font-size: 26px;
  color: #000;
}

.about__user {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0.5rem;
  overflow: hidden;
}

.about__img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  min-height: 50px;
  overflow: hidden;
  border-radius: 50%;
}
.about__img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.about__info {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-grow: 1;
  height: 100%;
  padding-left: 1rem;
}

.about__login {
  font-size: 1rem;
  font-weight: bold;
}

.about__buttons {
  display: flex;

  gap: 0.3rem;
}

.about__name {
  font-size: 0.8rem;
  font-weight: normal;
  color: gray;
}

.bold {
  font-weight: bold;
  font-size: 0.8rem;
}

.light {
  font-weight: 400;
  font-size: 0.8rem;
}
.light:hover {
  cursor: pointer;
}

.content__body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  gap: 2rem;
  height: 100%;
  padding: 2rem 1rem 1rem 2rem;
}

.content__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
}

.content__title {
  color: #000;
}

.content__counter {
  font-size: 0.9rem;
  color: gray;
}

.content__list {
  width: 100%;
  flex-grow: 1;
  padding: 1rem;
  overflow-y: scroll;
}

.users {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
}
.repos {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
}

.content__list::-webkit-scrollbar {
  width: 5px;
  margin-right: 5px;
}

.content__list::-webkit-scrollbar-track {
  background-color: transparent;
}

.content__list::-webkit-scrollbar-thumb {
  background-color: #afafaf;
  border-radius: 5px;
}
</style>
