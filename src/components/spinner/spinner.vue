<template>
  <div class="lds-dual-ring"></div>
</template>

<script>
export default {
  name: 'spinner',
};
</script>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 60px;
  height: 60px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 35px;
  height: 35px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid black;
  border-color: rgb(61, 47, 47) transparent rgb(24, 21, 21) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
