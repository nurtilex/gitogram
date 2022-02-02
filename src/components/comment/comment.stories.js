import comment from './comment.vue';

export default {
  title: 'comment',
  component: { comment },
  argTypes: {
    author: {
      control: { type: 'text' },
    },
    body: {
      control: { type: 'text' },
    },
  },
};

const template = (args) => ({
  components: { comment },
  template: `<comment v-bind="args"/>`,
  data() {
    return { args };
  },
});

export const Default = template.bind({});

Default.args = {
  author: 'Andrew',
  body: 'Test comment',
};
