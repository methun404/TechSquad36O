import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/store';

// Lazy-loaded route views
const HomePage = () => import('@/views/HomePage.vue');
const ServicesPage = () => import('@/views/ServicesPage.vue');
const AboutPage = () => import('@/views/AboutPage.vue');
const ContactForm = () => import('@/views/ContactForm.vue');
const NotFoundPage = () => import('@/views/404Page.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'TechSquad360 | Complete Tech & Digital Solutions' },
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage,
    meta: { title: 'Our Services | TechSquad360' },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: { title: 'About Us | TechSquad360' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm,
    meta: { title: 'Contact Us | TechSquad360' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
    meta: { title: '404 - Page Not Found | TechSquad360' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  },
});

// Navigation Guards to manage global loading and document title
router.beforeEach((to, from, next) => {
  store.dispatch('setLoading', true);
  document.title = to.meta.title || 'TechSquad360';
  next();
});

router.afterEach(() => {
  store.dispatch('setLoading', false);
});

export default router;
