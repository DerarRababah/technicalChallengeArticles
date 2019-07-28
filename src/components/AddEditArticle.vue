<template>
  <div class="main-content article">
    <div class="containr-image">
        <img src="../assets/bg-add-edit-article.svg" alt="bg-maincontent articles website">
    </div>
    <div class="container-content">
        <h1>
           <span  v-if="this.$route.query.id == undefined ">Add Article</span> 
           <span  v-else>Edit Article</span> 
        </h1>
        <input type="text" placeholder="Title" v-model="Article.title">
         <div class="choose-image">
            <input type='file' id="selectImage" v-on:change="readURL" accept="image/*"/>
            <img id="selectedImage" v-bind:src="Article.image" alt="your image" />
        </div>
        <input type="date" placeholder="Date " v-model="Article.date">
        <VueTrix v-model="Article.content" placeholder="Enter content"/>
        <div class="container-btns" >
          <button  @click="addEditArticle">submit</button>
        </div>
    </div>
  </div>
</template>

<script>
import VueTrix from "vue-trix";

export default {
  name: "AddEditArticle",
  components:{
    VueTrix
  },
  data() {
    return {
      Article: {
        id:"",
        title:"",
        content:"",
        date:"",
        image: require('../assets/placeholder.png'),
      }
    }
  },
  methods: {
      readURL : function(event,el){               
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var vm = this;
            if(event.target.files[0].size > 4000000){
              alert("File is too big!");
              return
            };
            reader.onload = function(e) {
                vm.Article.image = e.target.result ,
                console.log(vm.Article.image)
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    },
   addEditArticle (){
      this.$store.commit("addEditArticle", this.Article);
      if(confirm("go to articles page")){
          this.$router.push({ path: '/Articles' })
        }
    }
  },
   beforeMount: function () {
     if(this.$route.query.id != undefined){
       this.Article = this.$store.getters.getArticle(this.$route.query.id);
      console.log(this.$route.query.id)
     }
   }
};
</script>

<style scoped  lang="scss">

</style>
