<template>
  <div class="feed">
    <topline>
      <template #headline>
        <headline :avatar_url="user.avatar_url" />
      </template>

      <template #content>
        <ul class="stories-list">
          <li
            class="stories-list__item"
            v-for="({ id, login, avatarURL }, i) in formateObjects(trendings)"
            :key="id"
          >
            <storyItem :name="login" :avatarLink="avatarURL" :id="i" />
          </li>
        </ul>
      </template>
    </topline>
    <section class="main">
      <post v-for="item in formateObjects(repos)" :key="item.id" :data="item">
        <template #default>
          <articlePreview :data="item" />
        </template>
      </post>
    </section>
  </div>
</template>
<script>
import topline from '../../components/topline/topline.vue';
import headline from '../../components/headline/headline.vue';
import post from '../../components/post/post.vue';
import articlePreview from '../../components/articlePreview/articlePreview.vue';
import storyItem from '../../components/storyItem/storyItem.vue';

import { mapState, mapActions,  } from 'vuex';
import formateDate from '../../helper/formateDate';

export default {
  name: 'feeds',
  components: { headline, topline, storyItem, post, articlePreview },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchUser: 'user/fetchUser',
      fetchRepos: 'user/fetchRepos',
      fetchIssues: 'user/fetchIssues',
    }),
    formateObjects(arr) {
      return arr.map((item) => ({
        id: item.id,
        login: item.owner.login,
        title: item.name,
        avatarURL: item.owner.avatar_url,
        starsCount: item.stargazers_count,
        forksCount: item.forks_count,
        description: item.description,
        comments: [
          {
            nickname: 'joshua_l',
            body: "Enable performance measuring in production, at the user's request",
            id: 0,
          },
          {
            nickname: 'Camille',
            body: "It's Impossible to Rename an Inherited Slot",
            id: 1,
          },
          {
            nickname: 'Marselle',
            body: 'transition-group with flex parent causes removed items to fly',
            id: 2,
          },
        ],
        
        date: formateDate(item.created_at),
      }));
    },
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      user: (state) => state.user.user,
      repos: (state) => state.user.repos,
    }),
    
  },
  async created() {
    await this.fetchTrendings();
    await this.fetchUser();
    await this.fetchRepos();
  },
};
</script>

<style scoped>
.feed {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;
}

.c-topline {
  height: 14rem;
}

.icon {
  width: 60px;
  height: 60px;
  color: #000;
  border-radius: 50%;
  padding: 2px;
}
.stories-list {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
}
.stories-list__item {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding-top: 2rem;
}
</style>
