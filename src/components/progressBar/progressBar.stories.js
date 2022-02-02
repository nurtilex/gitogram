import progressBar from './progressBar.vue';

export default {
  title: 'progressBar',
  component: { progressBar },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end',
    },
  },
};

const template = (args) => ({
  components: {
    progressBar,
  },
  template: `<progressBar @onFinish="args.onFinish"/>`,
  data() {
    return {
      args,
    };
  },
});

export const Default = template.bind({});
Default.story = {
  name: 'Стандартный вид',
};
