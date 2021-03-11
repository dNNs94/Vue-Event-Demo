import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import About from '../views/About';
import EventDetails from '@/views/EventDetails';
import NotFound from '@/views/NotFound';

/* eslint-disable */

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    meta: {
      title: 'Event List'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
    meta: {
      title: 'Event Details'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  let defaultTitle = 'Vue Demo';

  if (to.params.title)
    document.title = defaultTitle + ` - ${to.params.title.toString()}`;
  else if (to.meta.title)
    document.title = defaultTitle + ` - ${to.meta.title}`;
  else
    document.title = defaultTitle;

  next();
});

export default router;
