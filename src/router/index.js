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
        name: "Alreadypub",
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
        name: "Edit",
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
        name: "Exportec",
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
        name: "Pageform",
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
        name: "Pictureup",
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
        name: "Publishart",
        component: () => import("../views/Publishart/Publishart")
      }
    ]
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register/Register")
  },
  {
    path: "/See",
    component: Home,
    children: [
      {
        path: "",
        name: "See",
        component: () => import("../views/See/See")
      }
    ]
  },
  {
    path: "/Signin",
    name: "Signin",
    component: () => import("../views/Signin/Signin")
  },
  {
    path: "/Signout",
    component: Home,
    children: [
      {
        path: "",
        name: "Signout",
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
        name: "Statistics",
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
        name: "Tabpage",
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

router.beforeEach((to, from, next) => {
  let user = localStorage.getItem("user");
  if (to.path === "/Signin" || to.path === "/Register") {
    next();
  } else {
    user ? next() : next("/Signin");
  }
});

export default router;
