<template>
  <li class="list">
    <StoryItem
      v-for="user in users"
      :key="user.path"
      :username="user.username"
      :isNew="user.isNew"
      :path="user.path"
    />
  </li>
</template>

<script>
import StoryItem from './StoryItem/StoryItem.vue';

export default {
  name: 'Stories',
  components: {
    StoryItem,
  },
  data() {
    return {
      users: [
        {
          username: 'John',
          path: require('../../../assets/John.svg'),
          isNew: true,
        },
        {
          username: 'Marselle',
          path: require('../../../assets/Marselle.svg'),
          isNew: true,
        },
        {
          username: 'Alex',
          path: require('../../../assets/Alex.svg'),
          isNew: true,
        },
        {
          username: 'Habib',
          path: require('../../../assets/Habib.svg'),
          isNew: true,
        },
        {
          username: 'Piter',
          path: require('../../../assets/Piter.svg'),
          isNew: true,
        },
        {
          username: 'Andrew',
          path: require('../../../assets/Andrew.svg'),
          isNew: true,
        },
        {
          username: 'Gay',
          path: require('../../../assets/Gay.svg'),
          isNew: false,
        },
        {
          username: 'Camille',
          path: require('../../../assets/Camille.svg'),
          isNew: false,
        },
        {
          username: 'Jane',
          path: require('../../../assets/Jane.svg'),
          isNew: false,
        },
        {
          username: 'Andrew',
          path: require('../../../assets/Andrew.svg'),
          isNew: false
        },
      ],
    };
  },
};
</script>

<style scoped>
.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.7rem;
  width: 80%;
  padding: 0 1rem;
  overflow: hidden;
}
</style>
