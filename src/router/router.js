import { createRouter, createWebHistory } from "vue-router"
import Home from '@/components/Home.vue'
import List from '@/components/List.vue'
import Details from '@/components/Details.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/list',
        name: 'list',
        component: List
    },
    {
        path: '/list/:id',
        name: 'details',
        component: Details
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router