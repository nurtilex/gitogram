<template>
  <button class="button" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    {{ currentText }}
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
    hoverText: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      currentText: this.text,
    };
  },
  methods: {
    onMouseEnter() {
      this.currentText = this.hoverText;
    },
    onMouseLeave() {
      this.currentText = this.text;
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
