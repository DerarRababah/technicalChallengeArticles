import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vue-trix";
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  console.log(store.getters.logInState);
  if (to.matched.some(record => record.meta.requiresLogin) &&
    store.getters.logInState == false) {
    alert("Please Log in ");
    next("/login");
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
