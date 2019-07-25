<template>
  <div class="main-content sign-up">
    <div class="containr-image">
        <img src="../assets/bg-register.svg" alt="bg-maincontent articles website">
    </div>
    <div class="container-content">
        <h1> Member <span>Sign Up</span> </h1>
        <input type="text" placeholder="First Name" v-model="user.firstName">
        <input type="text" placeholder="Last Name" v-model="user.lastName">
        <input type="email" placeholder="Username -Email- " v-model="user.userName">
        <input type="password" placeholder="Password" v-model="user.passward">
        <div class="container-btns" >
          <button @click="signUp">Sign Up</button>
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
        firstName:"",
        lastName:"",
        userName: "",
        passward:""

      }
    }
  },
  computed:{
      checkUser(){
        return this.$store.getters.checkUser(this.user.userName);
      }
  },
  methods:{
    signUp (){
      if(this.checkUser){
        this.$store.commit("addUser", this.user);
        this.$store.commit("logInState", true);
        
        this.$router.push({ path: 'Articles' })
      }else{
         alert(" username already exists ")
        if(confirm("go to login")){
          this.$router.push({ path: '/login' })
        }
       
      }
      
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">


</style>
