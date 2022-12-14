import { createApp } from "vue";
//import Vue from "vue";
import App from "./App.vue";
import "./index.css";

// global component imports
import NavbarVue from "./components/NavbarVue.vue";
import NavbarItemVue from "./components/NavbarItemVue.vue";

//new Vue();
const app = createApp(App);

app.component("NavbarVue", NavbarVue).component("NavbarItemVue", NavbarItemVue);

app.mount("#app");
