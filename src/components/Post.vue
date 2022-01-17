<template>
  <div class="post">
    <a class="post__author" href="#">
      <img :src="data.imgPath" alt="user icon" />
      <span class="nickname">{{ data.nickname }}</span>
    </a>
    <div class="post__article">
      <div class="post__title">{{ data.title }}</div>
      <div class="post__subtitle">{{ data.subtitle }}</div>
      <div class="post__controllers">
        <Button
          v-for="button in controllers"
          :key="button.name"
          :text="button.name"
        >
          <img
            v-if="button.hasIcon"
            :src="button.iconPath"
            alt="icon"
            class="controller__icon"
          />
        </Button>
      </div>
    </div>
    <div class="post__comments">
      <button type="button" class="toggler" @click="toggleShowComments">
        {{ commentsTogglerText }}
        <img
          :src="
            showComments
              ? require('../assets/arrow-up.svg')
              : require('../assets/arrow-down.svg')
          "
          alt="arrow"
        />
      </button>
      <div v-if="showComments">
        <CommentsItem
          v-for="comment in data.comments"
          :key="comment.nickname"
          :author="comment.nickname"
          :body="comment.body"
        />
      </div>
    </div>
    <div class="post__date">{{ data.date }}</div>
  </div>
</template>

<script>
import Button from './Button.vue';
import CommentsItem from './CommentsItem.vue';

export default {
  name: 'Post',
  components: {
    Button,
    CommentsItem,
  },
  props: {
    data: Object,
  },
  methods: {
    toggleShowComments() {
      this.showComments = !this.showComments;
    },
  },
  data() {
    return {
      controllers: [
        {
          name: 'Star',
          hasIcon: true,
          iconPath: require('../assets/star.svg'),
        },
        {
          name: '156k',
          hasIcon: false,
        },
        {
          name: 'Fork',
          hasIcon: true,
          iconPath: require('../assets/fork.svg'),
        },
        { name: '4', hasIcon: false },
      ],
      showComments: false,
    };
  },
  computed: {
    commentsTogglerText() {
      return this.showComments ? 'Hide issues' : 'View issues';
    },
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
  /* background: #f3f2f2; */
  /* border: 1px solid #000; */
}

.post__author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  color: #000;
  text-decoration: none;
}

.post__article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 1rem 1.5rem;
  width: 100%;
  height: 14rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
}
.post__title {
  font-size: 2rem;
  font-weight: bold;
  color: #000;
}
.post__controllers {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
  height: 2rem;
  background: #fafbfc;
  border-radius: 5px;
  border: 1px solid rgb(218, 213, 213);
}
.controller__icon {
  width: 17px;
  height: 17px;
}

.post__comments {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
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
  color: rgba(0, 0, 0, 0.4);;
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
