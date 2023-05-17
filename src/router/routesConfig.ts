import defaultLayout from '../layouts/default.vue'
import emptyLayout from '../layouts/empty.vue'

const routers = {
 Home: {
  path: '/',
  name: 'Home',
  component: () => import('../pages/HomePage.vue'),
  meta: {
   title: 'Home',
   layout: defaultLayout,
   auth: true,
  },
 },
 Login: {
  path: '/login',
  name: 'Login',
  component: () => import('../pages/LoginPage.vue'),
  meta: {
   title: 'Login',
   layout: emptyLayout,
  },
 },
}

export default routers
