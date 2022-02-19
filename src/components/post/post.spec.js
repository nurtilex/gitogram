import post from './post.vue';
import userButton from '../userButton/userButton.vue';

import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';
import { actions, getters } from '../../../store/modules/user';

import formateDate from '../../helper/formateDate';

const data = {
  id: 21737465,
  login: 'sindresorhus',
  title: 'awesome',
  avatarURL: 'https://avatars.githubusercontent.com/u/170270?v=4',
  starsCount: 189926,
  forksCount: 598,
  description: '😎 Awesome lists about all kinds of interesting topics',
  date: formateDate('2014-07-11T13:42:37Z'),
};

const store = createStore({
  getters: { ...getters },
  actions: { ...actions },
});

it('отображается в соответствии с переданными параметрами', () => {
  const wrapper = mount(post, {
    props: data,
    global: {
      plugins: [store],
    },
  });
  expect(wrapper.findComponent(userButton).find('img').attributes('src')).toBe(
    data.avatarURL
  );
  expect(wrapper.findComponent(userButton).find('span.nickname').text()).toBe(
    data.login
  );
  expect(wrapper.find('.post__date').text()).toBe(data.date);
});

it('спиннер отображается только во время загрузки', async () => {
  const wrapper = mount(post, {
    props: data,
    global: {
      plugins: [store],
    },
  });
  await wrapper.setData({ isLoading: false });
  expect(wrapper.find('.loading').exists()).toBe(false);

  await wrapper.setData({ isLoading: true });
  expect(wrapper.find('.loading').exists()).toBe(true);
});

it('блок с issues отображается корректно', async () => {
  const wrapper = mount(post, {
    props: data,
    global: {
      plugins: [store],
    },
  });
  await wrapper.setData({ shown: false });
  expect(wrapper.find('.comments').exists()).toBe(false);

  await wrapper.setData({ shown: true });
  expect(wrapper.find('.comments').exists()).toBe(true);
});
