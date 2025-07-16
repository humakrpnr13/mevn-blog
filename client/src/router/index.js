import { createRouter, createWebHistory } from 'vue-router';
import PostList from '../components/PostList.vue';
import PostDetail from '../views/PostDetail.vue';

const routes = [
  {
    path: '/',
    name: 'PostList',
    component: PostList
  },
  {
    path: '/posts/:id', // Route for a single post
    name: 'PostDetail',
    component: PostDetail,
    props: true // Pass route params as props to the component
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;