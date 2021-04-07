<template>
    <div class="container">
        <!-- comments Form -->
        <div class="card my-4">
            <h5 class="card-header"> Leave a Comment</h5>
            <div class="card-body">
                <el-form>
                 <el-form-item label="">
                            <el-input  type="textarea" placeholder="Article Name" v-model="form.body"></el-input>
                            <span class="text-danger" v-if="errors['form.body']">
                                {{errors['form.body'][0]}}
                            </span>
                        </el-form-item>
                          <el-button  type="primary"  @click.prevent="addNewComment()" >Comment </el-button>
                </el-form>
                <hr/>
                <div v-if=" allComments.data && allComments.data.length > 0">
                <div class="card-header mt-4" v-for="comment in allComments.data" :key="comment.id">
                   <h5>{{comment.user.name}}</h5>
                   <p> {{comment.body}}</p>
                </div>
                  <ul class="mb-4 mt-4">
                    <pagination :data="allComments" @pagination-change-page="getResults"  :limit="1" :show-disabled='true'>
                        <span slot="prev-nav">&lt; Previous</span>
                        <span slot="next-nav">Next &gt;</span>
                    </pagination>
                </ul>
                </div>
                <div v-else>
                     <div class="card-header mt-4">
                         <p>
                             Write the first comment
                         </p>
                     </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    props:['articleid'],
    data(){
        return{
            form:{},
            allComments:{},
            errors:{},
        }
    },
    methods:{
    addNewComment(){
        let { form,articleid} = this;
          axios.post('/comment', {form,articleid}).then(res => {
                        flash('Comment added Successfully', 'success');
                        this.form = {}
                        this.getComment();
                    }).catch(err => this.errors = err.response.data.errors);
        },
        getComment(){
              let {articleid} = this;
            axios.post(`/getcomments/${articleid}`).then(res => {this.allComments = res.data; console.log( res.data)}).catch(err => this.errors = err.response.data.errors);
        },
         getResults(page = 1) {
            let {articleid} = this;
			axios.post(`/getcomments/${articleid}?page=` + page)
				.then(response => {
					this.allComments = response.data;
				});
		},
    },
    created(){
        this.getComment();
    }

}
</script>

