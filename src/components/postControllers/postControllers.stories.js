import postControllers from './postControllers.vue';

export default {
  title: 'postControllers',
  component: { postControllers },
  argTypes: {
    starsAmount: {
      controls: { type: 'text' },
    },
    forkAmount: {
      controls: { type: 'text' },
    },
  },
};

const template = (args) => ({
  components: {
    postControllers,
  },
  template: `<postControllers v-bind="args"/>`,
  data() {
    return { args };
  },
});

export const Default = template.bind({});
Default.args = {
    starsAmount: 146, 
    forkAmount: 4
}