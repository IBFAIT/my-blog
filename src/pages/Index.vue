<template>
  <Layout>
    <div class="container">
      <h1>List Home</h1>
      <div v-for="h in $static.home.edges" :key="h.id" class="article d-flex">
        <div class="article__img"
             :style="{ 'background-image': 'url(' + home.node.image + ')' }"></div>
        <div class="article__body">
          <g-link :to="home.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{home.node.title}}</h1>
          <p class="article__abstract">{{home.node.abstract}}</p>
        </div>
      </div>
    </div>


    <div class="container">
      <h1>List articles</h1>
      <div v-for="article in $page.articles.edges" :key="article.id" class="article d-flex">
        <div class="article__img"
             :style="{ 'background-image': 'url(' + article.node.image + ')' }"></div>
        <div class="article__body">
          <g-link :to="article.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{article.node.title}}</h1>
          <p class="article__abstract">{{article.node.abstract}}</p>
        </div>
      </div>
    </div>


    <div class="container">
      <h1>List pages</h1>
      <div v-for="pg in $static.pgs.edges" :key="pg.id" class="article d-flex">
        <div class="article__img"
             :style="{ 'background-image': 'url(' + pg.node.image + ')' }"></div>
        <div class="article__body">
          <g-link :to="pg.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{pg.node.title}}</h1>
          <p class="article__abstract">{{pg.node.abstract}}</p>
        </div>
      </div>
    </div>




  </Layout>
</template>
<page-query>
query {
  articles: allArticles {
    edges {
      node {
        title
        abstract
        image
        path
      }
    }
  }
}
</page-query>

<static-query>
query {
  home: allPages(filter: { home: { eq: true }}) {
    edges {
      node {
        id
        title
      }
    }
  }
}
</static-query>

<static-query>
query {
  pgs: allPages {
    edges {
      node {
        title
        abstract
        image
        path
      }
    }
  }
}
</static-query>
<script>
export default {
  metaInfo: {
    title: "Neuropsychologische Praxis Dr. Denise Long"
  }
};
</script>
<style>
.article {
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 11px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  position: relative;
  margin-top: 50px;
  background-color: #fff;
}
@media screen and (max-width: 992px) {
  .article {
    display: block;
  }
}
.article__title {
  margin-top: 0;
}
.article__body {
  padding: 15px 30px;
}
.article__link {
  position: absolute;
  top: 0;
  right: 0;
  left: 0; 
  bottom: 0;
}
.article__img {
  width: 250px;
  height: 140px; 
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-right: 15px;
}
@media screen and (max-width: 992px) {
  .article__img {
    width: 100%;
    height: 180px;
  }
}
</style>
