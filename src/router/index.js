import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/views/login"),
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("@/layout"),
    redirect: "/console",
    meta:{
      title:'系统管理'
    },
    children: [
      {
        path: "/console",
        name: "console",
        component: () => import("@/views/console"),
        meta:{
          title:'控制台'
        },
        children:[
          
        ]
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/user"),
        meta:{
          title:'用户管理'
        }
      },
      {
        path: "/role",
        name: "role",
        component: () => import("@/views/role"),
        meta:{
          title:'角色管理'
        }
      },
      {
        path: "/menu",
        name: "menu",
        component: () => import("@/views/menu"),
        meta:{
          title:'菜单管理'
        }
      }
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
