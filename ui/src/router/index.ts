import { createRouter, createWebHistory, useRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import HelloWorldVue from '@/components/HelloWorld.vue'
import Cards from '@/views/Cards.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'view',
          name:'view',
          component: HelloWorldVue
        },
        {
          path: 'cards',
          name:'cards',
          component: Cards,
          children: [
            {
              // UserPosts will be rendered inside User's <router-view>
              // when /user/:id/posts is matched
              path: '',
              name: 'profile',
              component: HelloWorldVue,
            },
          ]
        },
        
      ]
        
    },
  ]
})

export default router
