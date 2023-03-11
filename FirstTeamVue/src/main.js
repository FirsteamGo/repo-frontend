import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";   //引用element-plus
import "../node_modules/element-plus/dist/index.css";  //引用element-plus



// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";



const app = createApp(App);
app.use(ElementPlus);  //引用element-plus
app.use(createPinia());
app.use(router);
app.use(materialKit);

app.mount("#app");


