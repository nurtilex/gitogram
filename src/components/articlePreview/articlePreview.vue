<template>
  <a class="post__article" :href="data.link">
    <div class="post__title">{{ data.title }}</div>
    <div class="post__subtitle">
      {{ data.description || 'Default description' }}
    </div>
    <!-- /* Контроллеры публикации */ -->
    <postControllers :starsAmount="data.starsCount" :forkAmount="data.forksCount" />
  </a>
</template>

<script>
import postControllers from '../postControllers/postControllers.vue';
export default {
  name: 'articlePreview',
  components: { postControllers },
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.post__article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 1rem 1.5rem;
  width: 100%;
  min-height: 14rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  cursor: pointer;
}

.post__title {
  font-size: 2rem;
  font-weight: bold;
  color: #000;
}

.post__controllers {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
  height: 2rem;
  background: #fafbfc;
  border-radius: 5px;
  border: 1px solid rgb(218, 213, 213);
}
.controller__icon {
  width: 17px;
  height: 17px;
}
</style>
