<template>
  <div class="story-item">
    <img :src="path" alt="user image" :class="classes" />

    <span class="name">{{ username }}</span>
  </div>
</template>

<script>
export default {
  name: 'StoryItem',
  props: {
    username: String,
    path: String,
    isNew: Boolean,
  },
  computed: {
    classes() {
      return this.isNew ? 'img new' : 'img';
    },
  },
};
</script>

<style scoped>
.story-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 50px;
  height: 105px;
}
.story-item:hover {
  cursor: pointer;
}
.img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px solid rgb(190, 185, 185);
  width: 65px;
  height: 65px;
  border-radius: 50%;
  padding: 0.2rem;
}

.new {
  outline: 2px solid #a6328d;
}
</style>
