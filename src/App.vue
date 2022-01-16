<template>
  <Feed />
</template>

<script>
import Feed from './pages/feed/Feed.vue';

export default {
  name: 'App',
  components: {
    Feed,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #fafafa;
}
#app {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
