<template>
  <header class="header">
    <Navigation />
    <Stories />
  </header>
</template>

<script>
import Navigation from './Navigation.vue';
import Stories from '../pages/feed/Stories/Stories.vue'

export default {
  name: 'Header',
  components: {
    Navigation,
    Stories
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 12rem;
}

</style>
