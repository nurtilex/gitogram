<template>
  <div class="comment">
    <span class="author">{{ author }}</span>
    <span class="body">{{ body}}</span>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.comment {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* gap: 0.2rem; */
  width: 100%;
  min-height: 2.2rem;
}
.author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  height: 100%;
  font-weight: bold;
}
.body {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 75%;
  height: 100%;
  text-align: left;
  overflow-x: hidden;
}
</style>
