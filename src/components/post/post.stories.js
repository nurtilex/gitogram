import post from './post.vue';
import articlePreview from '../articlePreview/articlePreview.vue';

export default {
  title: 'post',
  component: { post },
  argTypes: {
    data: {
      control: { type: 'object' },
    },
  },
};
const obj = {
  nickname: 'joshua_l',
  username: 'John',
  title: 'Vue.js',
  subtitle: 'JavaScript framework for building interactive web applications ⚡',
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
  date: '15 may',
  id: 0,
};

const template = (args) => ({
  components: { post, articlePreview },
  template: `
  <post v-bind="args">
    <template #default>
        <articlePreview v-bind="args">
    </template>
  <post/>`,
  data() {
    return { args };
  },
});

export const Default = template.bind({});
Default.args = {
  data: obj,
};
