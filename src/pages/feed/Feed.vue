<template>
  <section class="feed">
    <Header />
    <Post :data="post" />
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
      post: {
        nickname: 'joshua_l',
        imgPath: require('../../assets/joshua_l.svg'),
        title: 'Vue.js',
        subtitle:
          'JavaScript framework for building interactive web applications ⚡',
        comments: [
          {
            nickname: 'joshua_l',
            commentBody:
              "Enable performance measuring in production, at the user's request",
          },
          {
            nickname: 'Camille',
            commentBody: "It's Impossible to Rename an Inherited Slot",
          },
          {
            nickname: 'Marselle',
            commentBody:
              'transition-group with flex parent causes removed items to fly',
          },
        ],
        date: '15 may',
      },
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