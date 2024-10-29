import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import CollatzComponent from './components/CollatzComponent.vue'
import TablaMultiplicarComponent from './components/TablaMultiplicar.vue'

const myRoutes = [
    {
        path:"/", component : HomeComponent
    },
    {
        path:"/collatz", component: CollatzComponent
    },
    {
        path:"/tablamultiplicar", component: TablaMultiplicarComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default  router;