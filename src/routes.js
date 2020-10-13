import Vue from "vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import Todo from "./components/todo.vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/", component: Todo },
];

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes,
});
