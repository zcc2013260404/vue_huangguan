import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './HomeRouter'
import RankRouter from './RankRouter'
import UserRouter from './UserRouter'
import ChannelRouter from './ChannelRouter'
import StartFinish from "./StartFinish"
import StartLiveRouter from "./StartLiveRouter";
import LiveRouter from "./LiveRouter";
import SearchRouter from "./SearchRouter";

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  HomeRouter,
  RankRouter,
  UserRouter,
  StartLiveRouter,
  StartFinish,
  LiveRouter,
  ChannelRouter,
  SearchRouter
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
//利用前置守卫可以做拦截
// router.beforeEach((to, from, next) => {
//   let token = window.localStorage.getItem('token');
//   if (to.path === "/user/setter/changepassword") {679
//     next()
//   } else {
//     if (to.query.token) {
//       window.localStorage.setItem('token', to.query.token);
//       router.push('/home');
//     } else {
//       if (token) {
//         fetch("http://39.98.126.184:8080/api/Total/total?token=" + token).then(res => {
//           res.json().then(data => {
//             if (data.status === 1) {
//               next()
//             } else {
//               // alert("跳回登录页面")
//               window.location.href = 'http://localhost:3000/login'
//             }
//           })
//         })
//       } else {
//         window.location.href = 'http://localhost:3000/login'
//       }
//     }
//   }
// });
export default router
