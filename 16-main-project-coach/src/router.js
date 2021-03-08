import { createRouter, createWebHistory } from 'vue-router';

import CoachList from './components/coaches/CoachList.vue';
import CoachRegistration from './components/coaches/CoachRegistration.vue'
import RequestsList from './components/requests/RequestsList.vue'
import CoachInfos from './components/coaches/CoachInfos.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' }, 
    { path: '/coaches', component: CoachList }, 
    { path: '/coaches/:id', component: CoachInfos },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsList}
  ]
});

export default router;