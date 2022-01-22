<template>
  <a class="post__author" :href="link">
    <img :src="iconPath" alt="user icon" class="post-author__icon"/>
    <span class="nickname">{{ nickname }}</span>
  </a>
</template>

<script>
export default {
  name: 'userButton',
  props: {
    username: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    link: String,
  },
  computed: {
    iconPath() {
      const val = require(`../../assets/user-${this.username.toLowerCase()}.svg`);
      return val;
    },
  },
};
</script>

<style scoped>
.post__author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  color: #000;
  text-decoration: none;
  width: 25%;
}

.post-author__icon {
    width: 35px;
    height: 35px;
}

.post__author .nickname {
    font-weight: bold;
}
</style>
