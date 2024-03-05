import { createApp } from "vue";
import "@/main.scss";

import App from "./App.vue";
import { createMyRouter } from "@/router/router.ts";

const app = createApp(App);

app.use(createMyRouter());
app.mount("#app");
