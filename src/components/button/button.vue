<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'xButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14rem;
  height: 2.5rem;
  color: #fff;
  border: none;
  background-color: #31ae54;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.hover {
  background-color: gray;
}
</style>
