import { createApp } from "vue";
import "./assets/css/tailwind.css";
import "./assets/css/style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
