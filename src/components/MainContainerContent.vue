<template>
  <div class="main-content">
    <div class="containr-image">
        <img src="../assets/bg-maincontent.svg" alt="bg-maincontent articles website">
    </div>
    <div class="container-content">
       <h1>The world’s largest of <span>Articles </span> </h1>
       <p class="discription">
          read from over 100,000 online Articles with new additions published every month
        </p>
        <div class="container-btns">
          <router-link tag="button" to="/login">Log In</router-link>
          <span>Or</span>
          <router-link tag="button" to="/registration">Sign Up</router-link>
          
        </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "MainContainerContent",
};
</script>
