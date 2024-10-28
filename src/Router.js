import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'

const Routes = [
    {
        path:"/", component : HomeComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:Routes
})

export default  router;