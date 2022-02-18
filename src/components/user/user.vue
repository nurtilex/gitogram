<template>
  <div class="user" ref="user">
    <div class="user__about">
      <img :src="data.avatar_url" alt="user image" class="user__img" />
      <div class="user__wrapper">
        <span class="user__login">{{ data.login }}</span>
        <span class="user__name">{{ data.name }}</span>
      </div>
    </div>
    <button type="button" class="user__button" @click="handleButton">following</button>
  </div>
</template>

<script>
export default {
  name: 'user',
  emits: ['unfollow'],
  props: {
    data: Object,
  },
  methods: {
    handleButton() {
      this.$emit('unfollow', { owner: this.data.login, repo: this.data.name });
      this.$refs['user'].style.display = 'none'
    },
  },
};
</script>

<style scoped>
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0.5rem;
}

.user__about {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20rem;
  height: 100%;
}
.user__img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.user__wrapper {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 60%;
  height: 100%;
}

.user__login {
  color: #000;
  font-size: 0.9rem;
  text-transform: lowercase;
}
.user__name {
  color: gray;
  font-size: 0.7rem;
}

.user__button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 42px;
  border-radius: 5px;
  background-color: #31ae54;
  border: none;
  padding: 10px 20px;
  color: #fff;
}

.user__button:hover {
  cursor: pointer;
}
</style>
