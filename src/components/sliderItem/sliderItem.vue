<template>
  <div class="slider-item">
    <proggresBar />

    <div class="user-button">
      <userButton :username="data.username" :nickname="data.title" />
    </div>
    <hr class="hr" />
    <div class="slider-item__img"></div>
    <div class="slider-item__text">
      <span class="strong">Lorem Ipsum</span> is simply dummy text of the
      printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.
    </div>
    <hr class="hr" />
    <div class="button-wrapper">
      <x-button text="Follow" hoverText="Unfollow" />
    </div>
  </div>
</template>

<script>
import userButton from '../userButton/userButton.vue';
import progressBar from '../progressBar/progressBar.vue';
import button from '../button/button.vue';

export default {
  name: 'sliderItem',
  components: { userButton, progressBar, xButton: button },
  props: {
    data: {
      type: Object,
      required: true,
      /* Сделать валидатор для пропса */
    },
  },
};
</script>

<style scoped>
.strong {
  font-weight: bold;
}
.slider-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  width: 20rem;
  height: 30rem;
  padding-bottom: 1rem;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
}

.slider-item__img {
  background: url('../../assets/bg-phones.png') center no-repeat;
  background-size: cover;
  /* object-fit: cover; */
  width: 80%;
  height: 6rem;
  margin: 0 10%;
}
.slider-item__text {
  font-size: 14px;
}
.hr {
  width: 100%;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.progress-bar,
.user-button,
.slider-item__text {
  padding: 0 1rem;
}
</style>
