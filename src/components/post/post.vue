<template>
  <div class="post">
    <!-- Компонент автора поста -->
    <userButton :avatarLink="data.avatarURL" :nickname="data.login" link="#" />
    <!-- Слот для ссылки на публикацию с общей информацией -->
    <slot name="default"></slot>
    <!-- // Toggler -->
    <toggler @onToggle="toggle" />
    <!-- // Блок с комментариями -->
    <div class="post__comments">
      <div class="loading" v-if="isLoading">
        <spinner />
      </div>

      <div class="comments" v-else-if="shown">
        <comment
          v-for="comment in getIssuesOfRepo({ id: data.id })"
          :key="comment.id"
          :author="comment.login"
          :body="comment.title"
        />
      </div>
    </div>
    <!-- // Блок с датой  -->
    <div class="post__date">{{ data.date }}</div>
  </div>
</template>

<script>
import comment from '../comment/comment.vue';
import userButton from '../userButton/userButton.vue';
import toggler from '../toggler/toggler.vue';
import spinner from '../spinner/spinner.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'post',
  components: {
    comment,
    userButton,
    toggler,
    spinner,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      isLoading: false,
      shown: false,
    };
  },
  methods: {
    async toggle(isOpened) {
      const hasIssues = !!this.getIssuesOfRepo({ id: this.$props.data.id });
      try {
        if (isOpened) {
          this.isLoading = true;
        }
        if (!hasIssues) {
          const { login: owner, title: repo, id } = this.data;
          await this.fetchIssues({ owner, repo, id });
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
        this.shown = isOpened;
      }
    },
    ...mapActions({
      fetchIssues: 'user/fetchIssues',
    }),
  },
  computed: {
    ...mapGetters({
      getIssuesOfRepo: 'user/getIssuesOfRepo',
    }),
  },
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 70%;
  height: auto;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
}

.post__comments {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0.5rem;
}

.post__comments .toggler {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.post__date {
  color: rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  font-size: 0.8rem;
  width: 100%;
  text-align: left;
  padding-left: 0.5rem;
}

.nickname {
  font-weight: bold;
}
</style>
