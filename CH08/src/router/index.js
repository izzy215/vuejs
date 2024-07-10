import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserView from '../views/UserView.vue';
import UserViewCompositionApi from '../views/UserViewCompositionApi.vue';
const router = createRouter({// 라우트 구성객체
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     // /user, /mypage처럼 세그먼트 1개를 가진 경로만 일치함
        //     // /user/1, /mypage/1처럼 세그먼트 개수만 달라져도 일치히 않음
        //     path:'/:notfount',
        //     name:'NotFound',
        //     component: NotFound
        // },
        // {
        //     // 아무것이나 다 매치되고, 값은 '$route.params.pathMatch'에 할당됨
        //     path:'/:pathMatch(.*)*',
        //     name: 'NotFound',
        //     component: NotFound
        // },
        // {
        //     //'/user-'로 시작하는 모든 것과 일치하고, 값은 '$route.params.afterUser'에 할당됨
        //     path: '/user-:afterUser(.*)',
        //     component: UserGeneric 
        // },
        // {
        //     path: '/user/:id/profile',
        //     name: 'user',
        //     component: UserInfo,
        // },
    //     {
    //         path: '/user/info',
    //         name: 'user',
    //         component: UserView,
    //     },
    // {
    //         path: '/:id/UserViewCompositionApi',
    //         name: 'user',
    //         component: UserViewCompositionApi,
    //     }
        // {
        //     path: '/user/mike',
        //     name: 'useraMike',
        //     component: UserView
        // },
        // {
        //     path: '/user/john',
        //     name: 'userJohn',
        //     component: UserView
        // },
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path:'/about',
            name:'about',
            component:() => import('../views/AboutView.vue'),
        },
        // 중첩경로
        // {
        //     path:'/user',
        //     component: () => import('../views/UserView.vue'),
        //     children: [
        //         {
        //             path:'info',
        //             name:'user-info',
        //             component: () => import('../views/UserInfo.vue'),
        //         },
        //         {
        //             path:'profile',
        //             name:'user-profile',
        //             component:() => import('../views/UserProfile.vue'),
        //         },
        //     ],
        // },
        //이름이있는 뷰
        // {
        //     path: '/user',
        //     name: 'user',
        //     components: {
        //         header: () => import('../views/TheHeader.vue'),
        //         default: () => import('../views/UserView.vue'),
        //         footer: () => import('../views/TheFooter.vue'),
        //     },
        //경로컴포넌틍 props 전달하기 
        //     props: {header: true, default: false, footer: false},
        // },
    ],
});
export default router;