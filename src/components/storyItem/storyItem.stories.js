import storyItem from './storyItem.vue';

export default {
  title: 'storyItem',
  component: { storyItem },
};

const template = () => ({
  components: { storyItem },
  template: `<storyItem name="Andrew"/>`,
});

export const Default = template.bind({});
