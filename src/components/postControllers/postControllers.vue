<template>
  <div class="controllers-wrapper">
    <div class="stars">
      <button class="stars__button" type="button">
        <img src="../../assets/star.svg" alt="star icon" />
        <span>Star</span>
      </button>
      <span class="stars__value">{{ starsAmount }}</span>
    </div>
    <div class="fork">
      <button class="fork__button" type="button">
        <img src="../../assets/fork.svg" alt="forked repository icon" />
        <span>Fork</span>
      </button>
      <span class="fork__value">{{ forkAmount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'postControllers',
  props: {
    starsAmount: {
      type: Number,
      required: true,
    },
    forkAmount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.controllers-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 14rem;
  border: 1px solid rgba(27, 31, 35, 0.15); 
  height: 2rem;
  border-radius: 5px;
}

.stars,
.fork {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 105%;
  overflow: hidden;
}

.stars__button,
.fork__button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  width: 60%;
  height: 100%;
  background-color: transparent;
  border: none;
  border-right: 1px solid rgba(27, 31, 35, 0.15);
  text-decoration: none;
  cursor: pointer;
}

.stars__value,
.fork__value {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  width: 40%;
  height: 100%;
  border-right: 1px solid rgba(27, 31, 35, 0.15);
}
</style>
