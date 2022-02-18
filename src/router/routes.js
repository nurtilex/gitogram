import feeds from '../pages/feeds/feeds.vue';
import stories from '../pages/stories/stories.vue';
import auth from '../pages/auth/auth.vue';
import profile from '../pages/profile/profile.vue'

export default [
  {
    name: 'feeds',
    path: '/',
    component: feeds,
  },
  {
    name: 'stories',
    path: '/stories',
    component: stories,
  },
  {
    name: 'auth',
    path: '/auth',
    component: auth,
  },
  {
    name: 'profile',
    path: '/profile',
    component: profile
  }
];
