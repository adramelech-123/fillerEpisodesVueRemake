import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ShowsView from "../views/ShowsView.vue"
import ContributorsView from "../views/ContributorsView.vue"
import ShowView from "../views/showView.vue"
import NotFoundView from "../views/404View.vue"

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [

        {
            path: "/",
            name: "home",
            component: HomeView
        },

        {
            path: "/home",
            redirect: "/"
        },

        {
            path: "/about",
            name: "about",
            component: AboutView
        },

        {
            path: "/shows",
            name: "shows",
            component: ShowsView
        },

        {
            path: "/shows/:id",
            name: "show",
            component: ShowView
        },

        {
            path: "/contributors",
            name: "contributors",
            component: ContributorsView
        },

        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView
        }

        
    ]
})

export default router