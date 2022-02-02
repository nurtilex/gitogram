import userButton from '../userButton/userButton.vue';

export default {
  title: 'userButton',
  component: { userButton },
};

const template = () => ({
  components: { userButton },
  template: `<userButton username="Andrew" nickname="andrew" link="#"/>`,
});

export const Default = template.bind({});
Default.story = {
  name: 'Стандартный вид',
};
