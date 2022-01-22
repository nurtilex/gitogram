<template>
  <div class="c-topline">
    <slot name="headline" />

    <div class="content" v-if="$slots.content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'topline',
};
</script>
<style scoped>
.c-topline {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 12rem;
}
.content {
  width: 80%;
}
</style>
