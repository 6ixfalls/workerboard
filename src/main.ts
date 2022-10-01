import { createApp } from 'vue';
import App from './App.vue';
import { routes } from "./routes";
import { createRouter, createWebHistory } from 'vue-router'
import './assets/main.css';
import 'preline';

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: import.meta.hot ? [] : routes,
});

if (import.meta.hot) {
    let removeRoutes: any = []

    for (let route of routes) {
        removeRoutes.push(router.addRoute(route))
    }

    import.meta.hot?.accept('./routes.ts', ({ routes }: any) => {
        for (let removeRoute of removeRoutes) removeRoute()
        removeRoutes = []
        for (let route of routes) {
            removeRoutes.push(router.addRoute(route))
        }
        router.replace('')
    })
}

app.use(router);

app.mount('#app');
