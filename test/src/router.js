import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    {
        path: "/hello",
        component: HelloWorld,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
