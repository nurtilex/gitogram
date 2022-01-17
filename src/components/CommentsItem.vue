<template>
  <div class="comment">
    <span class="author">{{ author }}</span
    ><span class="body">{{ body }}</span>
  </div>
</template>

<script>
export default {
  name: 'CommentsItem',
  props: {
    author: String,
    body: String,
  },
};
</script>

<style scoped>
.comment {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  height: 1.8rem;
}

.author {
  font-weight: bold;
}
.body {
    text-align: left;
}
</style>
