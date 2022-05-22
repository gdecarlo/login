import Vue from "vue";
import VueRouter from "vue-router";
import AppLogin from "@/components/AppLogin";
import AppHome from "@/components/AppHome";
import AppSecret from "@/components/AppSecret";
import { useStore } from "@/store/store";
import pinia from "@/store/index";

const routes = [
  {
    path: "/login",
    name: "login",
    component: AppLogin,
  },
  {
    path: "/",
    name: "home",
    component: AppHome,
  },
  {
    path: "/secret",
    name: "secret",
    component: AppSecret,
    meta: { requiereAutenticarse: true },
  },
];

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);

router.beforeEach((to, from, next) => {
  const store = useStore(pinia);
  const requiereAutenticarse = to.matched.some(
    (ruta) => ruta.meta.requiereAutenticarse
  );
  const usuarioAutenticado = store.esAutenticado;
  console.log(store);
  if (requiereAutenticarse && !usuarioAutenticado) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
