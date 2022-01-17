<template>
  <section class="feed">
    <Header />
    <Post v-for="post in posts" :key="post.id" :data="post" />
  </section>
</template>
<script>
import Header from '../../components/Header.vue';
import Post from '../../components/Post.vue';

export default {
  name: 'Feed',
  components: {
    Header,
    Post,
  },
  data() {
    return {
      posts: [
        {
          nickname: 'joshua_l',
          imgPath: require('../../assets/joshua_l.svg'),
          title: 'Vue.js',
          subtitle:
            'JavaScript framework for building interactive web applications ⚡',
          comments: [
            {
              nickname: 'joshua_l',
              body: "Enable performance measuring in production, at the user's request",
            },
            {
              nickname: 'Camille',
              body: "It's Impossible to Rename an Inherited Slot",
            },
            {
              nickname: 'Marselle',
              body: 'transition-group with flex parent causes removed items to fly',
            },
          ],
          date: '15 may',
          id: 0,
        },
        {
          nickname: 'Camille',
          imgPath: require('../../assets/camille-post.svg'),
          title: 'React.js',
          subtitle:
            'Open source JavaScript library used for designing user interfaces',
          comments: [
            {
              nickname: 'joshua_l',
              body: "Enable performance measuring in production, at the user's request",
            },
            {
              nickname: 'Camille',
              body: "It's Impossible to Rename an Inherited Slot",
            },
            {
              nickname: 'Marselle',
              body: 'transition-group with flex parent causes removed items to fly',
            },
          ],
          date: '15 may',
          id: 1,
        },
      ],
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
}
</style>
