import { createApp } from "vue";

import App from "./App.vue";
import PrimeVue from "primevue/config";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Panel from "primevue/panel";

import "primeflex/primeflex.scss";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue);
app.component("Textarea", Textarea);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Panel", Panel);

app.mount("#app");
