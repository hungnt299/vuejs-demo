import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        background: "#ffffff",
        surface: "#f2f5f8",
        primary: "#2B3A55",
        secondary: "#a5c9ca",
        accent: "#048ba8",
        error: "#bb2124",
        info: "#5bc0de",
        success: "#22bb33",
        warning: "#f0ad4e",
      },
    },
  },
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
