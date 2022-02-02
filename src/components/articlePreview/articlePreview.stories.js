import articlePreview from './articlePreview.vue';

export default {
  title: 'articlePreview',
  component: { articlePreview },
  argTypes: {
    data: {
      control: { type: 'object' },
    },
  },
};

const template = (args) => ({
  components: { articlePreview },
  template: `<articlePreview v-bind="args"/>`,
  data() {
    return { args };
  },
});

export const Default = template.bind({});

Default.args = {
  data: {
    title: 'Title',
    subtitle: 'Subtitle',
    stars: '45',
    forks: '46'
  },
};
