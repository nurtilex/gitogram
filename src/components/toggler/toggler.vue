<template>
  <button type="button" class="toggler" @click="toggleValue">
    <span class="button_text">{{ currentText }}</span>
    <span :class="['button__icon', { active: isOpened }]">
      <img src="../../assets/arrow-icon.svg" alt="arrow" />
    </span>
  </button>
</template>
<script>
export default {
  name: 'toggler',
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toggleValue() {
      this.isOpened = !this.isOpened;
      this.$emit('onToggle', this.isOpened);
    },
  },
  computed: {
    currentText() {
      return this.isOpened ? 'Hide issues' : 'View issues';
    },
  },
};
</script>

<style scoped>
.toggler {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.2rem;
  width: 7rem;
  border: none;
  background: none;
  cursor: pointer;
}
.active {
  transform: rotate(180deg);
}
</style>
