<template>
  <section class="stories-section">
    <header class="header">
      <div class="logo">
        <img src="../../assets/Gitogram.svg" alt="gitogram" />
      </div>
      <router-link to="/" class="link">
        <div class="close-button">+</div>
      </router-link>
    </header>
    <div class="wrapper">
      <div
        class="stories-wrapper"
        :style="{ transform: `translateX(${this.currentSlide * -23}rem)` }"
      >
        <sliderItem
          v-for="item in formateObjects(trendings)"
          :key="item.id + currentSlide"
          :data="item"
          @move-slide="handleMoveSlide"
        />
      </div>
    </div>
  </section>
</template>

<script>
import sliderItem from '../../components/sliderItem/sliderItem.vue';
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'stories',
  components: { sliderItem },
  data() {
    return {
      isLoading: false,
      showButtons: true,
    };
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme',
    }),
    ...mapMutations({
      updateCurrentSlide: 'trendings/updateCurrentSlide',
    }),
    async fetchReadmeForActiveSlide() {
      const { id, owner, name } = this.trendings[this.currentSlide];
      await this.fetchReadme({ id, owner: owner.login, repo: name });
    },
    async handleMoveSlide(place) {
      if (place === 'next') this.updateCurrentSlide(this.currentSlide + 1);
      if (place === 'prev') this.updateCurrentSlide(this.currentSlide - 1);
      if (place >= 0 && place < this.trendings.length) {
        this.updateCurrentSlide(place);
      }
      await this.loadReadme();
    },
    async loadReadme() {
      this.isLoading = true;
      this.showButtons = false;
      try {
        await this.fetchReadmeForActiveSlide();
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        this.isLoading = false;
        this.showButtons = true;
      }
    },
    formateObjects(arr) {
      return arr.map((item, i, currentArr) => ({
        id: item.id,
        login: item.owner.login,
        title: item.name,
        avatarURL: item.owner.avatar_url,
        content: item.readme,
        isRepoStarredByMe: this.idList.includes(item.id),
        active: i === this.currentSlide,
        loading: i === this.currentSlide && this.isLoading,
        showButtons: this.showButtons,
        isLeft: i === 0,
        isRight: currentArr.length - 1 === i,
      }));
    },
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      currentSlide: (state) => state.trendings.currentSlide,
    }),
    ...mapGetters({
      idList: 'user/getAllId',
    }),
  },
  async created() {
    await this.fetchTrendings();
    await this.loadReadme();
  },
};
</script>
<style scoped>
.stories-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #fff;
  padding: 1rem;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15%;
  padding: 0 7%;
}

.logo {
  color: #fff;
}
.link {
  text-decoration: none;
}
.close-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  color: #fff;
  font-size: 3rem;
  font-weight: 300;
  transform: rotate(45deg);
}
.wrapper {
  position: relative;
  width: 100%;
  height: 80%;
  overflow: hidden;
}
.stories-wrapper {
  position: absolute;
  left: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  min-width: 150%;
  height: 100%;
  overflow: visible;
  margin-left: -10rem;
  transition: 0.3s;
}
.story-wrapper {
  width: auto;
  height: auto;
}
</style>
