<template>
  <div class="articles">
    <div class="section-header">
      <div class="title">
        <h1>{{Article.title}}</h1>
      </div>
      <div class="main-image">
        <img :src="Article.image" alt="articles background ">
      </div>
      <div class="container-link">
        <router-link :to="{path:'/add-edit-article', query: {id: Article.id}}"  class="btn-edit">
           <img src="../assets/edit.png" alt="edit article"  title="Edit Article">
        </router-link>
        <router-link to="/add-edit-article"  class="btn-edit">
           <img src="../assets/add.png" alt="add article" title="Add Article">
        </router-link>
        <a  @click="deleteArtical"  class="btn-edit">
           <img src="../assets/delete-button.png" alt="add article" title="Add Article">
        </a>
      </div>
    </div>
 <div class="container-text">
          <h4>{{Article.date}}</h4>
          <div class="content" v-html="Article.content">
          </div>
      </div>
  </div>
</template>
<script>
export default {
 
  data(){
    return{
      Article : {}
    }
  },
  mounted: function () {
    this.Article = this.$store.getters.getArticle(this.$route.query.voterId);
    console.log(this.Article)
  },
 methods:{
   deleteArtical(){
     alert();
      this.$store.commit("deleteArticle", this.Article.id);
       this.$router.push({ path: 'Articles' });
   }
 }
}
</script>

<style  scoped lang="scss">
 .section-header{
    box-shadow: 0px 0px 15px 0px #ccc;
    padding-bottom: 30px;
 }
  .title{
    text-align: center;
    h1{
      font-size: 72px;
      text-align: center;
      margin-top: 50px;
      margin-bottom: 50px;
      color: #6a9c35;
      text-transform: uppercase;
      display: inline-block;
      box-shadow: 0px 0px 26px #ccc;
      padding: 0 25px;

    }
  }
  .container-link {
    position: absolute;
    right: 100px;
    top: 100px;
    display: flex;
    flex-direction: column;
    .btn-edit {
      height: 75px;
      width: 75px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0px 0px 7px 0px #fff;
      margin: 9px 0;
      cursor: pointer;
      img{
          max-width: 40px;
          max-height: 40px;
      }
    }
  }

   .main-image{
      width: 1400px;
      height: 600px;
      margin: 20px auto;
      display: flex;
      align-items:center;
      justify-content:center;
      overflow: hidden;
      img{
        flex-grow: 0;
        max-width: 100%;
        max-height: 100%;
        width: auto;
      }
    }
   
    .container-articles,.container-text {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        width: 1600px;
        margin: 50px auto;
        color: #4f4d4d;
        .article {
          width: 330px;
          overflow: hidden;
          height: 423px;
          margin: 20px;
          border-radius: 9px;
          box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.55);
          display: flex;
          flex-direction: column;
          position: relative;
          background:url('../assets/article1.jpg');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          padding: 20px;
          &::before{
            content: '';
            background-color: #ffffffc7;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 0;
          }
          *{
            z-index: 1;
          }
        
      }
        h4{
              font-size: 30px;
              margin-bottom: 20px;
              height: 75px;
              overflow: hidden;
              text-overflow: ellipsis;
              flex-basis: auto;
              flex-shrink: 0;
              flex-grow: 0;
              text-align: center;
          }
          .content{
              font-style: italic;
              line-height: 24px;
              flex-grow: 1;
              overflow: hidden;
          }
    }

  
    .container-text {
        flex-direction: column;
    }
</style>