<template>
  <div class="navigation">
    <Logo />
    <li class="list">
      <IconButton href="#">
        <img src="../assets/home.svg" alt="homepage icon" />
      </IconButton>
      <IconButton href="#">
        <img src="../assets/user.svg" alt="some user" />
      </IconButton>
      <IconButton href="#">
        <img src="../assets/sign-out.svg" alt="sign-out icon" />
      </IconButton>
    </li>
  </div>
</template>
<script>
import Logo from './Logo.vue';
import IconButton from './IconButton.vue';

export default {
  name: 'Navigation',
  components: {
    Logo,
    IconButton,
  },
};
</script>

<style scoped>
.navigation {
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
</style>
