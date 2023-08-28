import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/RegistrationForm.vue'),
  },
  {
    path: '/welcome',
    component: () => import('../views/Welcome.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
});
export default router