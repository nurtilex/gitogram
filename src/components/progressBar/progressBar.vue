<template>
  <div :class="{ active: isActive }" class="progress-bar">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'progressBar',
  emits: ['onFinish'],
  props: { active: { type: Boolean, required: true } },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    emitOnFinish() {
      this.$emit('onFinish', 1);
    },
  },
  mounted() {
    const vm = this;
    setTimeout(function () {
      if (vm.$props.active) vm.isActive = true;
    }, 0);

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish);
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener(
      'transitionend',
      this.emitOnFinish
    );
    this.$refs.indicator.sty;
  },
};
</script>

<style scoped>
.progress-bar {
  width: 95%;
  height: 3px;
  position: relative;
  background-color: #31ae544d;
  border-radius: 5px;
}
.progress-bar.active > .indicator {
  width: 100%;
}
.indicator {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 0;
  background-color: #31ae54;
  border-radius: 5px;
  transition: 5s;
}
</style>
