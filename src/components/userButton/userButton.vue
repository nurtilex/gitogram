<template>
  <a class="post__author" :href="link || '#'">
    <img :src="avatarLink" alt="user icon" class="post-author__icon" />
    <span class="nickname">{{ nickname }}</span>
  </a>
</template>

<script>
export default {
  name: 'userButton',
  props: {
    avatarLink: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    link: String,
  },
};
</script>

<style scoped>
.post__author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  color: #000;
  text-decoration: none;
  width: 100%;
}

.post-author__icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.post__author .nickname {
  font-weight: bold;
}
</style>
