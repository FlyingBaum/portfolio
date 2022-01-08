import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import About from "../views/About.vue";
import Skills from "../views/Skills.vue";
import Projects from "../views/Projects.vue";
import Social from "../views/Social.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/social",
    name: "Social",
    component: Social,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
