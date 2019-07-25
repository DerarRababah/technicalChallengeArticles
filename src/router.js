import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/MainContainerContent.vue")
        },
        {
          path: "MainContainerContent",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/MainContainerContent.vue")
        },
        {
          path: "/login",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Login.vue")
        },
        {
          path: "/registration",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Registration.vue")
        },
        {
          path: "/add-edit-article",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/AddEditArticle.vue"),
          meta: { requiresLogin: true }
        }
      ]
    },
    {
      path: "/Articles",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Articles.vue"),
      meta: { requiresLogin: true }
    },
    {
      path: "/Article",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Article.vue"),
      meta: { requiresLogin: true },
      children: [
        {
          path: "*",
          redirect: "/Articles"
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
