import headline from './headline.vue';

export default {
  title: 'headline',
  component: { headline },
};

const template = () => ({
  components: { headline },
  template: `<headline />`,
});

export const Default = template.bind({});
