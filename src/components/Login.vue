<template>
  <div class="main-content login">
    <div class="containr-image">
        <img src="../assets/bg-login.svg" alt="bg-maincontent articles website">
    </div>
    <div class="container-content">
       <h1> Member <span>Log In </span> </h1>
      
        <input type="email" placeholder="Username -Email- " v-model="user.userName">
        <input type="password" placeholder="Password" v-model="user.passward">
        <div class="container-btns" >
          <button @click="logIn">Log In</button>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MainContainerContent",
   data() {
    return {
      user: {
        userName: "",
        passward:""
      }
    }
  },
  computed:{
      logInUser(){
        return this.$store.getters.logIn(this.user.userName,this.user.passward);
      }
  },
  methods:{
    logIn (){
      if(this.logInUser){
        this.$store.commit("logInState", true);
        this.$router.push({ path: 'Articles' });
      }else{
        this.$store.commit("logInState", false);
        alert("You have entered an invalid username or password")
      }
    }
  }
};
</script>

<style  scoped lang="scss">


</style>
