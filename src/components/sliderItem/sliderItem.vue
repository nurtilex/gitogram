<template>
  <div :class="sliderStyles">
    <div
      v-if="showLeftButton"
      class="button-move button--prev"
      @click="moveSlide('prev')"
    ></div>
    <div class="header">
      <div class="progress">
        <progressBar
          :active="data.active"
          @on-finish="this.$emit('moveSlide', 'next')"
        />
      </div>
      <div class="user">
        <userButton :avatarLink="data.avatarURL" :nickname="data.login" />
      </div>
    </div>
    <div class="content">
      <div v-if="data.loading" class="loader">
        <spinner />
      </div>
      <div
        v-else-if="data.content !== undefined"
        class="body"
        v-html="data.content"
      ></div>
      <div v-else class="placeholder">
        <sliderPlaceholder />
      </div>
    </div>
    <div class="footer">
      <div class="button">
        <xButton
          :text="isStarred ? 'Unfollow' : 'Follow'"
          @click="handleButtonClick"
        />
      </div>
    </div>
    <div
      v-if="showRightButton"
      class="button-move button--next"
      @click="moveSlide('next')"
    ></div>
  </div>
</template>

<script>
import userButton from '../userButton/userButton.vue';
import progressBar from '../progressBar/progressBar.vue';
import spinner from '../spinner/spinner.vue';
import xButton from '../button/button.vue';
import sliderPlaceholder from '../sliderPlaceholder/sliderPlaceholder.vue';

import { mapActions } from 'vuex';

export default {
  name: 'sliderItem',
  emits: ['moveSlide'],
  components: {
    progressBar,
    userButton,
    xButton,
    spinner,
    sliderPlaceholder,
  },

  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions({
      likeRepo: 'user/likeRepo',
      dislikeRepo: 'user/dislikeRepo',
    }),
    moveSlide(direction) {
      this.$emit('moveSlide', direction);
    },
    handleButtonClick() {
      if (this.isStarred) {
        this.dislikeRepo({
          owner: this.$props.data.login,
          repo: this.$props.data.title,
        });
      } else {
        this.likeRepo({
          owner: this.$props.data.login,
          repo: this.$props.data.title,
        });
      }
    },
  },
  computed: {
    showLeftButton() {
      return this.data.active && !this.data.isLeft && this.data.showButtons;
    },
    showRightButton() {
      return this.data.active && !this.data.isRight && this.data.showButtons;
    },
    sliderStyles() {
      return { 'slider-item': true, 'not-active': !this.data.active };
    },
    isStarred() {
      return this.$props.data.isRepoStarredByMe;
    },
  },
};
</script>

<style scoped>
@import './sliderItem.css';
</style>
