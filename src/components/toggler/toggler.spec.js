import toggler from './toggler.vue';
import { mount } from '@vue/test-utils';

it('меняет заголовок по клику', async () => {
  const wrapper = mount(toggler);

  await wrapper.find('.toggler').trigger('click');
  expect(wrapper.find('.button_text').text()).toBe('Hide issues');

  await wrapper.find('.toggler').trigger('click');
  expect(wrapper.find('.button_text').text()).toBe('View issues');
});

it('иконка стрелки содержит класс active по клику на "view issues"', async () => {
  const wrapper = mount(toggler);
  await wrapper.find('.toggler').trigger('click');
  expect(wrapper.find('img').classes('active')).toBe(true);
});
it('иконка стрелки не содержит класс active по клику на "hide issues"', async () => {
  const wrapper = mount(toggler);
  await wrapper.setData({ isOpened: true });
  await wrapper.find('.toggler').trigger('click');
  expect(wrapper.find('img').classes('active')).toBe(false);
});
