// Vue Libraries
import VueRouter from "vue-router";

// Our Pages
import HomePage from "@/pages/HomePage";

let routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    }
];

const router = new VueRouter({
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

export default router;
