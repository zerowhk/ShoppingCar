import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const User = { template: '<div>User {{ $route.params.id }}</div>' }
const Home = {
    template: '<div>Home</div>'
}
const router = new VueRouter({
    //mode 路由模式, 默认hash模式
    mode: 'hash',
    routes: [
        {
            path: '/user/:id',
            name: 'user',
            alias: '/userinfo/:id',
            component: User
        },
        {
            path: '/home',
            component: Home
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(from)
    console.log(to);
    next();
})

export default router;