import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const users = {
  state: {
    usersList: [],
    logInState: false
  },
  mutations: {
    addUser(state, payload) {
      state.usersList.push({
        firstName: payload.firstName,
        lastName: payload.lastName,
        userName: payload.userName,
        passward: payload.passward
      });
      console.log(state.usersList);
      localStorage.setItem("usersList", JSON.stringify(state.usersList));
    },
    logInState(state, status) {
      return (state.logInState = status);
    }
  },
  actions: {},
  getters: {
    logIn: state => (userName, passward) => {
      if(JSON.parse(localStorage.getItem("usersList")) != null){
        state.usersList = JSON.parse(localStorage.getItem("usersList"));
      }
      var index = state.usersList.findIndex(
        x => x.userName == userName && x.passward == passward
      );
      if (index >= 0) {
        return true;
      } else {
        return false;
      }
    },
    checkUser: state => userName => {
      if(JSON.parse(localStorage.getItem("usersList")) != null){
        state.usersList = JSON.parse(localStorage.getItem("usersList"));
      }
      var index = state.usersList.findIndex(x => x.userName === userName);
      if (index >= 0) {
        return false;
      } else {
        return true;
      }
    },
    logInState(state) {
      return state.logInState;
    }
  }
};

const articlesList = {
  state: {
    articlesList: []
  },
  mutations: {
    addEditArticle(state, payload) {
      const index = state.articlesList.findIndex(
        item => item.id === payload.id
      );
      if (index !== -1) {
        state.articlesList.splice(index, 1, payload);
        alert("article edit");
      } else {
        state.articlesList.push({
          id: uniqueId(),
          title: payload.title,
          content: payload.content,
          date: payload.date,
          image: payload.image
        });
        alert("article added");
      }
      localStorage.setItem("articlesList", JSON.stringify(state.articlesList));
    },
    deleteArticle(state, id) {
      const index = state.articlesList.findIndex(item => item.id === id);
      if (index !== -1) {
        state.articlesList.splice(index, 1);
        alert("article deleted");
      } 
      localStorage.setItem("articlesList", JSON.stringify(state.articlesList))
  }
},
  getters: {
    getArticle: state => id => {
      if(JSON.parse(localStorage.getItem("articlesList")) != null){
        state.articlesList = JSON.parse(localStorage.getItem("articlesList"));
      }
      var index = state.articlesList.findIndex(x => x.id === id);
      return state.articlesList[index];
    },
    getAllArticles(state) {
      if(JSON.parse(localStorage.getItem("articlesList")) != null){
        state.articlesList = JSON.parse(localStorage.getItem("articlesList"));
      }
      return state.articlesList;
  }
}
};

function uniqueId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    a: users,
    b: articlesList
  }
});
