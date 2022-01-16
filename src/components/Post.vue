<template>
  <div class="post">
    <a class="post__author" href="#">
      <img :src="data.imgPath" alt="user icon" />
      <span class="nickname">{{ data.nickname }}</span>
    </a>
    <div class="post__article">
      <div class="post__title">{{ data.title }}</div>
      <div class="post__subtitle">{{ data.subtitle }}</div>
      <div class="post__controllers"></div>
    </div>
    <div class="post__comments"></div>
    <div class="post__date"></div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 70%;
  height: auto;
  /* background: #f3f2f2; */
  /* border: 1px solid #000; */
}

.post__author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  color: #000;
  text-decoration: none;
}

.post__article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 1.5rem;
  width: 100%;
  height: 10rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
}
.post__title {
  font-size: 2rem;
  font-weight: bold;
  color: #000;
}
.nickname {
  font-weight: bold;
}
</style>
