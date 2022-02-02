import button from './button.vue';

export default {
  title: 'button',
  component: { button },
  argTypes: {
    hoverText: {
      control: { type: 'text' },
    },
  },
};

const template = (args) => ({
  components: {
    xButton: button,
  },
  template: `<x-button v-bind="args"></x-button>`,
  data() {
    return { args };
  },
});

export const Default = template.bind({});
Default.args = {
  text: 'Follow',
  hoverText: 'Unfollow',
};
