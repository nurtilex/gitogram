<template>
  <div class="headline">
    <logo />
    <li class="list">
      <a href="#">
        <img
          src="../../assets/home.svg"
          alt="homepage icon"
          class="list-item__img"
        />
      </a>
      <a href="#">
        <img
          :src="avatar_url"
          alt="some user"
          class="list-item__img user-img"
        />
      </a>
      <a href="#">
        <img
          src="../../assets/sign-out.svg"
          alt="sign-out icon"
          class="list-item__img"
        />
      </a>
    </li>
  </div>
</template>
<script>
import logo from '../logo/logo.vue';

export default {
  name: 'headline',
  components: {
    logo,
  },
  props: ['avatar_url'],
};
</script>

<style scoped>
.headline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 30%;
  width: 75%;
}
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: auto;
  height: 80%;
  list-style: none;
}
.list-item__img {
  width: 30px;
  height: 30px;
  overflow: hidden;
}
.user-img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>
