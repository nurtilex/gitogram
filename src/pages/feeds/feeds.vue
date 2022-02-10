<template>
  <div class="feed">
    <topline>
      <template #headline>
        <headline />
      </template>

      <template #content>
        <ul class="stories-list">
          <li
            class="stories-list__item"
            v-for="({ id, login, avatarURL }, i) in formateObjects(trendings)"
            :key="id"
          >
            <storyItem :name="login" :avatarLink="avatarURL" :id="i" />
          </li>
        </ul>
      </template>
    </topline>
    <section class="main">
      <post
        v-for="item in formateObjects(trendings)"
        :key="item.id"
        :data="item"
      >
        <template #default>
          <articlePreview :data="item" />
        </template>
      </post>
    </section>
  </div>
</template>
<script>
import topline from '../../components/topline/topline.vue';
import headline from '../../components/headline/headline.vue';
import post from '../../components/post/post.vue';
import articlePreview from '../../components/articlePreview/articlePreview.vue';
import storyItem from '../../components/storyItem/storyItem.vue';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'feeds',
  components: { headline, topline, storyItem, post, articlePreview },
  methods: {
    ...mapActions({ fetchTrendings: 'trendings/fetchTrendings' }),
    formateObjects(arr) {
      return arr.map((item) => ({
        id: item.id,
        login: item.owner.login,
        title: item.name,
        avatarURL: item.owner.avatar_url,
        starsCount: item.stargazers_count,
        forksCount: item.watchers_count,
        description: item.description,
        comments: [
          {
            nickname: 'joshua_l',
            body: "Enable performance measuring in production, at the user's request",
            id: 0,
          },
          {
            nickname: 'Camille',
            body: "It's Impossible to Rename an Inherited Slot",
            id: 1,
          },
          {
            nickname: 'Marselle',
            body: 'transition-group with flex parent causes removed items to fly',
            id: 2,
          },
        ],
        body: [
          'The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.',
          `For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.`,
          'In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms',
          `For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.`,
        ],
        date: '15 MAY',
      }));
    },
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
    }),
  },
  async created() {
    await this.fetchTrendings();
  },
};
</script>

<style scoped>
.feed {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.icon {
  width: 60px;
  height: 60px;
  color: #000;
  border-radius: 50%;
  padding: 2px;
}
.stories-list {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
}
.stories-list__item {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding-top: 2rem;
}
</style>
