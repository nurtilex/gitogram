<template>
  <div class="story-item">
    <router-link to="/stories" class="icon" @click="updateCurrentSlide(id)">
      <img :src="avatarLink" alt="user icon" />
    </router-link>
    <span class="story-item__text">{{ name }}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'storyItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    avatarLink: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      updateCurrentSlide: 'trendings/updateCurrentSlide',
    }),
  },
};
</script>

<style scoped>
.story-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 70px;
  height: 105px;
}
.story-item:hover {
  cursor: pointer;
}
.story-item .icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  outline: 2px solid #a6328d;
  border: 0px solid transparent;
  background-color: transparent;
  transition: 0.1s;
}
.story-item .icon:hover {
  outline-color: transparent;
  cursor: pointer;
}

.icon img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  padding: 2px;
}

.story-item__text {
  display: flex;
  justify-content: center;
  font-size: 12px;
  width: 95%;
  overflow: hidden;
}
</style>
