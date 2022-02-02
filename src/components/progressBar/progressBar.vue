<template>
  <div :class="{ active }" class="progress-bar">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'progressBar',
  data() {
    return {
      active: false,
    };
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish() {
      this.$emit('onFinish');
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.active = true;
    });

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish);
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener(
      'transitionend',
      this.emitOnFinish
    );
  },
};
</script>

<style scoped>
.progress-bar {
  width: 85%;
  height: 0.3rem;
  position: relative;
  background-color: #31ae544d;
  border-radius: 5px;
}
.progress-bar.active .indicator {
  width: 100%;
}
.indicator {
  position: absolute;
  top: 0;
  left: 0%;
  height: 100%;
  width: 0;
  background-color: #31ae54;
  border-radius: 5px;
  transition: 5s;
}
</style>
