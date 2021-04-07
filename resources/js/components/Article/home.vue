<template>
    <div>
 <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="header">
                <h2>Articles {{this.ArticleData.name}}</h2>
              </div>

              <div class="row">
                <div class="leftcolumn" v-if="ArticleData.data && ArticleData.data.length >0">
                  <div class="card" v-for="Article in ArticleData.data" :key="Article.id">
                 <a :href="'details/' + Article.id" :title="Article.title">
                        <h3>{{Article.title}}</h3>
                        <p>Date : {{ Article.created_at | timeFormat}}</p>

                    <img  height="100%"  width="100%" :src="'/images/Article/' + Article.image" :alt="Article.title">
                        <p class="mt-3">{{Article.body | limit_str}}</p>
                  </a>
                  </div>
                    <ul class="mb-4 mt-4">
                        <pagination :data="ArticleData" @pagination-change-page="getResults"  :limit="1" :show-disabled='true'>
                            <span slot="prev-nav">&lt; Previous</span>
                            <span slot="next-nav">Next &gt;</span>
                        </pagination>
                    </ul>
                </div>
                <div  class="card leftcolumn" v-else>
                    <h2 class="text-center"> Sorry, Don't have any Article</h2>
                </div>
                <div class="rightcolumn">
                  <div class="card">
                    <h2>All categories</h2>
                    <ul class="list-style vertical-list list-limited">
                        <li class="list-item" v-for="category in category.data" :key="category.id">
                            <a href="#" class="cate-link" @click.prevent="ArticleBycatigory(category.id)" >{{category.name}}</a>
                            </li>
                    </ul>
                  </div>
                  <div class="card">
                    <h3>Popular articles</h3>
                    <div v-for="PopularArticle in PopularArticles" :key="PopularArticle.id">
                        <a :href="'/details/' + PopularArticle.id" :title="PopularArticle.title">
                            <h5>{{PopularArticle.title}}</h5>
                            <div class="Also-img"><img width="90%" :src="'/images/Article/' + PopularArticle.image" ></div><br>
                            </a>

                  </div>
                </div>
                </div>
              </div>

        </div>
    </div>
    </div>
</template>


<script>
export default {
    data() {
        return{
            ArticleData:{},
            category:{},
            PopularArticles:{},
        }
    },
    methods:{
         getArticle(){
          axios.get('Article').then(res => { this.ArticleData = res.data;}).catch(err => console.log(err));
          },
        getcatigory(){
          axios.get('/category').then(res => { this.category = res.data;}).catch(err => console.log(err));
          },
          ArticleBycatigory(id){
              axios.post(`ArticleBycatigory/${id}`).then(res => {this.ArticleData = res.data;}).catch(err => console.log(err));
          },
          getPopularArticle(){
              axios.get('PopularArticle').then(res => {this.PopularArticles = res.data; console.log(res.data)}).catch(err => console.log(err));
          },
           getResults(page = 1) {
			axios.get(`Article?page=` + page)
				.then(response => {
					this.ArticleData = response.data;
				});
		},

    },
    created(){
        this.getArticle();
        this.getcatigory();
        this. getPopularArticle();
    }
}
</script>
