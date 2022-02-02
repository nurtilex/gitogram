import sliderItem from './sliderItem.vue';

export default {
  title: 'sliderItem',
  component: { sliderItem },
  argTypes: {
    data: {
      control: { type: 'object' },
    },
  },
};

const template = (args) => ({
  components: { sliderItem },
  template: `<sliderItem v-bind="args"/>`,
  data() {
    return { args };
  },
});

export const Default = template.bind({});
Default.args = {
  data: {
    nickname: 'Camille',
    username: 'Camille',
    title: 'React.js',
    subtitle:
      'Open source JavaScript library used for designing user interfaces',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
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
    id: 1,
  },
};
