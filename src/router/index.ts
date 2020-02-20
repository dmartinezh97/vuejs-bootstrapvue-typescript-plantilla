import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Inicio",
    meta: { title: 'Inici' }
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: 'Iniciar sessió' },
    component: () => import("@/views/Login/component")
  },
  {
    path: "/fichar",
    name: "Fichar",
    meta: { title: 'Fichar' },
    component: () => import("@/views/Fichar/component")
  },
  {
    path: "/informes",
    name: "Informes",
    meta: { title: 'Informes' },
    component: () => import("@/views/Informes/component")
  }
];

const router = new VueRouter({
  /* mode: 'history', */
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next)=>{
  document.title =  store.state.appName+" - "+to.meta.title;
  next();
});

export default router
