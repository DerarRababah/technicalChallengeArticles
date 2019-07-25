<template>
  <div class="articles">
    <div class="section-header">
      <div class="title">
        <h1>Articles</h1>
      </div>
      <div class="main-image">
        <img src="../assets/bg-articles.svg" alt="articles background ">
      </div>
      <div class="container-link">
          <router-link to="/add-edit-article" html='' class="btn-edit">
            <img src="../assets/add.png" alt="add article" title="Add Article">
          </router-link>
        </div>
    </div>
    <div class="container-articles">
        <router-link  v-for="item in getAllArticles" :to="{path:'/Article', query: {voterId: item.id}}" :style="{ backgroundImage: `url(${item.image})` }" class="article"> 
          <h4>{{item.title}}</h4> 
          <div class="content" v-html="item.content">  </div>
        </router-link >
       
      </div>
    
  </div>
</template>
<script>

export default {
  name: "articles",
  
  data() {
    return {
    
    }
  },
   computed:{
      getAllArticles(){
        return this.$store.getters.getAllArticles;
      }
  }
};
</script>
<style   lang="scss">
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
      img{
          max-width: 40px;
          max-height: 40px;
      }
    }
  }
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

   .main-image{
      width: 1400px;
      height: 600px;
      margin: 20px auto;
      display: flex;
      align-items:center;
      justify-content:center;
      overflow: hidden;
      img{
        flex-grow: 1;
        width: 100%;
        max-height: 100%;
      }
    }

    .container-articles {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        width: 1600px;
        margin: 50px auto;
        .article {
          color: #4f4d4d;
          text-decoration: none;
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
          h4{
              font-size: 30px;
              margin-bottom: 20px;
              height: 75px;
              overflow: hidden;
              text-overflow: ellipsis;
              flex-basis: 75px;
              flex-shrink: 0;
              flex-grow: 0;
          }
          .content{
              font-style: italic;
              line-height: 24px;
              flex-grow: 1;
              overflow: hidden;
          }
      }
    }

</style>