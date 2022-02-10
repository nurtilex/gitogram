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
  height: 14rem;
  background-color: #FAFAFA;
  border-bottom: 1.5px solid #9E9E9E;
  box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
}
.content {
  width: 75%;
  
}
</style>
