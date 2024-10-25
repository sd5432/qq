import {createRouter,createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

var routes=[//定義路徑與對應vue檔
    {path:"/",component:Home},
    {path:"/about",component:About},
];

var router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;