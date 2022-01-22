<template>
  <div class="feed">
    <topline>
      <template #headline>
        <headline />
      </template>

      <template #content>
        <ul class="stories-list">
          <li
            class="stories-list__item"
            v-for="{ name, isNew, id } in users"
            :key="id"
          >
            <storyItem :name="name" :isNew="isNew" />
          </li>
        </ul>
      </template>
    </topline>
    <section class="main">
      <post v-for="post in posts" :key="post.id" :data="post">
        <template #default>
          <articlePreview :data="post" />
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

import { default as store } from '../../data';
console.log(store.users);

export default {
  name: 'feeds',
  components: { headline, topline, storyItem, post, articlePreview },
  data() {
    return {
      users: store.users,
      posts: store.posts,
    };
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
