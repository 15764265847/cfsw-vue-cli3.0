import { baseRouteView } from "@src/router/base-route-view";
import Store from '../store';
const RouteView = baseRouteView(Store);

const BlogHome = () => import("../views/blog-home");
const BlogDetail = () => import("../views/blog-detail");
// const BlogComment = () =>
// 	import('../views/blog-comment.vue');

import { RouteRecordRaw, RouterView } from "vue-router";

const routes: RouteRecordRaw[] = [
  /**
   * 文章模块
   */
  {
    path: "/blog",
    component: RouterView,
    children: [
      /**
       * 微博feed流
       * path: /blog/home
       */
      {
        path: "home",
        name: "blog-home",
        component: BlogHome,
      },
      /**
       * 微博详情
       * path: /blog/detail
       */
      {
        path: "detail",
        name: "blog-detail",
        component: BlogDetail,
      },
      // /**
      //  * 微博评论
      //  * path: /blog/comment
      //  */
      // {
      // 	path: 'comment',
      // 	name: 'blog-comment',
      // 	component: BlogComment
      // }
    ],
  },
];
export default routes;
