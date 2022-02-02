<template>
  <div class="feed">
    <topline>
      <template #headline>
        <headline />
      </template>

      <template #content>
        <ul class="stories-list">
          <li class="stories-list__item" v-for="user in users" :key="user.id">
            <storyItem :name="user.name" />
          </li>
        </ul>
      </template>
    </topline>
    <section class="main">
      <post v-for="item in items" :key="item.id" :data="item">
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
import storyItem from '../../components/storyItem/storyItem.vue';
import post from '../../components/post/post.vue';
import articlePreview from '../../components/articlePreview/articlePreview.vue';

import * as api from '../../api';

import { default as store } from '../../data';

export default {
  name: 'feeds',
  components: { headline, topline, storyItem, post, articlePreview },
  data() {
    return {
      users: store.users,
      items: [],
    };
  },
  async created() {
    try {
      const { data } = await api.trandings.getTrandings();
      this.items = data.items.map((item) => {
        return {
          nickname: item.owner.login,
          id: item.id,
          title: item.name,
          username: 'John',
          stars: item.stargazers_count,
          forks: item.watchers_count,
          subtitle: item.description,
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
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.feed {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
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
  justify-content: flex-start;
  align-items: center;
  gap: 1.7rem;
  width: 100%;
  padding: 0 1rem;
  overflow: hidden;
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
}
</style>
