import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
import { getUser } from '../api/rest/user';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth';
  if (authRoute) {
    next();
    return;
  }
  try {
    const response = await getUser();
    if (response.status === 401) throw new Error()
    next();
  } catch (e) {
    next({ name: 'auth' });
  }
});

export default router;
