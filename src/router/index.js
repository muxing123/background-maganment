import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Homepage from "../views/Homepage/Homepage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Homepage"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/Homepage",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Homepage/Homepage")
      }
    ]
  },
  {
    path: "/Alreadypub",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Alreadypub/Alreadypub")
      }
    ]
  },
  {
    path: "/Edit",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Edit/Edit")
      }
    ]
  },
  {
    path: "/Exportec",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Exportec/Exportec")
      }
    ]
  },
  {
    path: "/Pageform",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Pageform/Pageform")
      }
    ]
  },
  {
    path: "/Pictureup",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Pictureup/Pictureup")
      }
    ]
  },
  {
    path: "/Publishart",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Publishart/Publishart")
      }
    ]
  },
  {
    path: "/Publishart",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Publishart/Publishart")
      }
    ]
  },
  {
    path: "/Register",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Register/Register")
      }
    ]
  },
  {
    path: "/See",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/See/See")
      }
    ]
  },
  {
    path: "/Signin",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Signin/Signin")
      }
    ]
  },
  {
    path: "/Signout",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Signout/Signout")
      }
    ]
  },
  {
    path: "/Statistics",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Statistics/Statistics")
      }
    ]
  },
  {
    path: "/Tabpage",
    component: Home,
    children: [
      {
        path: "",
        name: Homepage,
        component: () => import("../views/Tabpage/Tabpage")
      }
    ]
  },
  {
    path: "*",
    component: () => import("../views/Error.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
