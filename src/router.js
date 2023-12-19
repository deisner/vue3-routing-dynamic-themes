import { configureCompat } from 'vue';
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
  configureCompat({
    MODE: (component) => {
      const v3Components = ['VTextField', 'VInput'];
      // return component && component.name
      console.log(component);
      return to.meta.theme === 'bootstrap' ? 2 : 3
    },
    GLOBAL_EXTEND: true,
    INSTANCE_LISTENERS: true
  })
})

export default router
