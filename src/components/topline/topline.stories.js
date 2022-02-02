import topline from './topline.vue';
import headline from '../headline/headline.vue';

export default {
  title: 'topline',
  component: { topline },
};

const template = () => ({
  components: { topline, headline },
  template: `
  <topline>
    <template #headline>
        <headline />
    </headline>
  </topline>`,
});

export const Default = template.bind({});
