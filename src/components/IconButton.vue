<template>
  <a :href="href" class="link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    href: String,
  },
};
</script>
