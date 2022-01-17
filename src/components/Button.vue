<template>
  <a href="#"><slot></slot>{{ text }}</a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: String,
    text: String,
  },
};
</script>

<style scoped>
a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  text-decoration: none;
  color: inherit;
  padding: 5px 15px;
  border-right: 1px solid rgba(27, 31, 35, 0.15);
  border-left: 1px solid rgba(27, 31, 35, 0.15);
  width: auto;
  height: 100%;
}
</style>
