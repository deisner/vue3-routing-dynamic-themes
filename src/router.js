import { createRouter, createWebHistory } from 'vue-router'
import { useTheme } from './use-theme'
const { theme } = useTheme()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      meta: {
        theme: 'vuetify',
      },
      component: () => import('@/components/HelloWorld.vue'),
    },
    {
      path: '/bootstrap',
      meta: {
        theme: 'bootstrap',
      },
      component: () => import('@/views/BootstrapVueView.vue'),
    },
    {
      path: '/vuetify',
      meta: {
        theme: 'vuetify',
      },
      component: () => import('@/views/VuetifyView.vue'),
    },
  ],
})

router.beforeEach(to => {
  theme.value = to.meta.theme
})

export default router
