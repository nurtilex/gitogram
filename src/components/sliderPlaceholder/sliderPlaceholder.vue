<template>
  <div class="wrapper">
    <div class="img"></div>
    <div class="paragraph-wrapper">
      <div class="paragraph--small"></div>
      <div class="paragraph--large"></div>
      <div class="paragraph--small"></div>
    </div>
    <div class="paragraph-wrapper">
      <div class="paragraph--small"></div>
      <div class="paragraph--large"></div>
      <div class="paragraph--small"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sliderPlaceholder',
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
}

.img {
  width: 100%;
  height: 45%;
  background-color: #dedede;
  border-radius: 5px;
}

.paragraph-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: auto;
}
.paragraph--small {
  width: 65%;
  height: 1rem;
  background-color: #DEDEDE;
  border-radius: 5px;

;
}
.paragraph--large {
  width: 85%;
  height: 1rem;
  background-color: #DEDEDE;
  border-radius: 5px;

}
</style>
