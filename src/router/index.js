import Vue from 'vue'
import VueRouter from 'vue-router'
/* import home from '../components/home.vue'
import about from '../components/about.vue'
import user from '../components/user.vue' */
/* 懒加载 */
const home = () =>
    import ("../components/home.vue");
const about = () =>
    import ("../components/about.vue");
/* const user = () =>
    import ("../components/user.vue") */
const news = () =>
    import ("../components/homenews.vue");
const mess = () =>
    import ("../components/homemess.vue");
const profile = () =>
    import ("../components/profile.vue")
    //1.安装插件
Vue.use(VueRouter)
    //3.配置url路径和组件之间的映射关系 路由映射数组
const routes = [{
            path: "/",
            //重定向
            redirect: "/home",
        },
        {
            path: '/home',
            name: 'home',
            meta: {
                title: "首页"
            },
            component: home,
            children: [
                /*  {
                     path: "/",
                     redirect: "news",
                 }, */
                {
                    //子路由不需要加/
                    path: "news",
                    component: news,
                },
                {
                    path: "mess",
                    component: mess,
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                title: "关于"
            },
            component: about,
            //路由独享守卫
            beforeEnter: (to, from, next) => {
                console.log(1111);
                next();
            }
        },
        {
            /* 绑定 */
            path: "/user/:userid",
            name: "user",
            /* 元数据 */
            meta: {
                title: "用户"
            },
            component: () =>
                import ("../components/user.vue"),
        },
        {
            path: "/profile",
            name: "profile",
            meta: {
                title: "档案"
            },
            component: profile,
        }
    ]
    //2.创建Vuerouter对象
const router = new VueRouter({
        //history模式去除路由#号 将hash模式改为history模式
        mode: 'history',
        //配置路由与组件之间的关系
        routes,
        //修改active 处于活跃active-class
        linkActiveClass: "active",
    })
    //前置钩子(hook) 跳转前回调
    //全局导航守卫
router.beforeEach((to, from, next) => {
        /*  ${//to and from are Route Object,next() must be called to resolve the hook } */
        //从from跳转到to
        /* document.title = to.meta.title; */
        //有嵌套子组件
        document.title = to.matched[0].meta.title;
        /* console.log(to);
        console.log("+++"); */
        //必须调用next 知道下一步，不然无法跳转
        next();

    })
    //后置钩子 跳转后回调
router.afterEach((to, from) => {
        /*  ${//these hooks do not get a next function and cannot affect the navigation} */
        /*  console.log("-----"); */

    })
    //4.将router对象传入到vue实例中
export default router