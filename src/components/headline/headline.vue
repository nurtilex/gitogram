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
          src="../../assets/user-andrew.svg"
          alt="some user"
          class="list-item__img"
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
};
</script>

<style scoped>
.headline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 30%;
  width: 80%;
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
}
</style>
