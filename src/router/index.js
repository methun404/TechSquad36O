import { createRouter, createWebHistory } from 'vue-router';
import { store } from '../store'; // Import Vuex store

// Lazy-loaded components
const AboutPage = () => import('../views/AboutPage.vue');
const NotFoundPage = () => import('../views/404Page.vue');
const ServicesPage = () => import('../views/ServicesPage.vue');
const ContactForm = () => import('../views/ContactForm.vue');
const HomePage = () => import('../views/HomePage.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: { title: 'Home - TechSquad360' },
    },
    {
        path: '/services',
        name: 'ServicesPage',
        component: ServicesPage,
        meta: { title: 'Services - TechSquad360' },
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
        meta: { title: 'About Us - TechSquad360' },
    },
    {
        path: '/contact',
        name: 'ContactForm',
        component: ContactForm,
        meta: { title: 'Contact - TechSquad360' },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundPage,
        meta: { title: '404 - Page Not Found' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Navigation Guards to manage loading state
router.beforeEach((to, from, next) => {
    store.dispatch('setLoading', true); // Show loading before route change
    document.title = to.meta.title || 'TechSquad360'; // Set the page title
    next(); // Proceed with the navigation
});

router.afterEach(() => {
    store.dispatch('setLoading', false); // Hide loading after route has been resolved
});

export default router;
