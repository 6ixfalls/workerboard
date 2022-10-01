import SignIn from './pages/SignIn.vue'
import Error404 from './pages/404.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
    { path: '/', component: SignIn },
    { path: '/:path(.*)*', component: Error404 },
]