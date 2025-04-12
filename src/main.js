import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import ProfilePage from './components/ProfilePage'
import ChatPage from './components/ChatPage'
import LoadPosts from './components/LoadPosts'
import NotFoundPage from './components/NotFound'

const routes = [
        {
            path:'/',
            name:'ProfilePage',
            component: ProfilePage
        },
        {
            path:'/chat',
            name:'Chat',
            component: ChatPage
        },
        {
            path:'/posts',
            name:'LoadPosts',
            component: LoadPosts
        },
        {
            path:'/:pathMatch(.*)*',
            name:'err 404',
            component: NotFoundPage
        }
        // {
        //     path:'/',
        //     name:'',
        //     component:
        // }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router)
app.mount('#app')