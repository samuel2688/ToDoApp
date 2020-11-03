import Vue from "vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import Todo from "./components/todo.vue";
import VueRouter from "vue-router";
import pageNotFound from "./components/404.vue";

const routes = [
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  { path: "/", name: "todo", component: Todo },
  { path: "*", name: "pageNotFound", component: pageNotFound },
];

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes,
});
