<template>
  <div class="story-item">
    <div class="icon">
      <img :src="icon" alt="user icon" />
    </div>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'storyItem',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      const val = require(`../../assets/user-${this.name.toLowerCase()}.svg`);
      return val;
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
.story-item .icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  outline: 2px solid #a6328d;
}
.icon img {
  width: 60px;
  height: 60px;
}
</style>
