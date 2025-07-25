import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; 
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue'; 
import PostDetailView from '../views/PostDetailView.vue'; 
import PodcastView from '../views/PodcastView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/posts/:id', name: 'PostDetail', component: PostDetailView, props: true }, 
  {path: '/podcasts', name: 'Podcasts', component: PodcastView},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;