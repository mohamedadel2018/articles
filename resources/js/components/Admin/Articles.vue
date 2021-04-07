<template>
    <div class="container">
        <div class="card-header border-0">
            <div class="d-flex justify-content-between">
                  <el-button type="primary" round @click.prevent="createArticle()" >add Articale <i class="el-icen-plus"></i> </el-button>
            </div>
                <el-dialog
                title="New Article"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose" center>
                <span>
                    <el-form label-width="20%" @submit.prevent="addNewArticle">
                        <el-form-item label="Article Title">
                            <el-input placeholder="Article Title" v-model="form.title"></el-input>
                            <span class="text-danger" v-if="errors['title']">
                                {{errors['title'][0]}}
                            </span>
                        </el-form-item>
                            <el-form-item label="Article body">
                            <el-input  type="textarea" placeholder="Article Name" v-model="form.body"></el-input>
                            <span class="text-danger" v-if="errors['body']">
                                {{errors['body'][0]}}
                            </span>
                        </el-form-item>
                       <el-form-item label="Select Catigory" >
                            <el-select v-model="form.category_id" placeholder="Catigorys">
                            <el-option v-for="catigory in  catigoryData.data" :key="catigory.id" :label="catigory.name" :value="catigory.id"></el-option>
                            </el-select>
                            <span class="text-danger" v-if="errors['category_id']">
                                {{errors['category_id'][0]}}
                            </span>
                        </el-form-item>
                        <el-form-item label="Image *">
                                <!-- <el-input type="file"  @change="processFile($event)" placeholder="Article Image"></el-input> -->
                             <input type="file" @change="processFile($event)">
                            <span class="text-danger" v-if="errors['image']">
                                {{errors['image'][0]}}
                            </span>
                        </el-form-item>
                    </el-form>
                </span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click.prevent="addNewArticle()">Submit</el-button>
                </span>
                </el-dialog>

        </div>
          <el-table
                ref="multipleTable"
                :data="ArticleData.Article.data.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%"
                border>
                <el-table-column
                label="Date">
                <template  slot-scope="scope"> {{scope.row.created_at | timeFormat }} </template>
                </el-table-column>
                 <el-table-column
                label="title"
                prop="title">
                </el-table-column>
                 <el-table-column
                label="body">
                 <template  slot-scope="scope"> {{scope.row.body | limit_str_admin }} </template>
                </el-table-column>
                 <el-table-column
                label="image"
                prop="image">
                 <template slot-scope="scope">
                    <img width="50%" :src="'/images/Article/' +scope.row.image"/>
                </template>
                </el-table-column>
                 <el-table-column
                label="catigory"
                prop="category_id">
                <template slot-scope="scope">
                    {{catigoryName(scope.row.category_id)}}
                </template>
                </el-table-column>
                <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    placeholder="Type to search"/>
                 {{scope.row}}
                </template>

                <template slot-scope="scope">
                         <el-button  size="mini"  @click.prevent="editArticle(scope.row)" >Edit</el-button>
                                 <el-dialog
                                    title="Edit Article"
                                    :visible.sync="editArticleVisible"
                                    width="50%"
                                    :before-close="handleClose" center>
                                    <span>
                                       <el-form label-width="20%" @submit.prevent="addNewArticle">
                        <el-form-item label="Article Title *">
                            <el-input placeholder="Article Title" v-model="form.title"></el-input>
                            <span class="text-danger" v-if="errors['title']">
                                {{errors['title'][0]}}
                            </span>
                        </el-form-item>
                         <el-form-item label="description *">
                        <el-input type="textarea" placeholder="description for Article" v-model="form.body"></el-input>
                        <span class="text-danger" v-if="errors['body']">
                            {{errors['body'][0]}}
                        </span>
                        </el-form-item>
                        <el-form-item label="Catigory *" >
                            <el-select v-model="form.category_id" placeholder="select Catigory">
                            <el-option v-for="catigory in  ArticleData.catigory" :key="catigory.id" :label="catigory.name" :value="catigory.id"></el-option>
                            </el-select>
                            <span class="text-danger" v-if="errors['category_id']">
                                {{errors['category_id'][0]}}
                            </span>
                        </el-form-item>



                           <el-form-item label="Image *">
                                <!-- <el-input type="file"  @change="processFile($event)" placeholder="Article Image"></el-input> -->
                             <input type="file" @change="processFile($event)">
                            <span class="text-danger" v-if="errors['image']">
                                {{errors['image'][0]}}
                            </span>
                        </el-form-item>
                    </el-form>
                            </span>
                                    <span slot="footer" class="dialog-footer">
                                        <el-button @click="editArticleVisible = false">Cancel</el-button>
                                        <el-button type="primary"  @click.prevent="updateArticle(form.id)">Save</el-button>
                                    </span>
                                    </el-dialog>
                    <el-button
                    type="danger"
                    size="mini"
                    @click="deleteArticleVisible = true">Delete</el-button>
                     <el-dialog
                            title="Delete Article"
                            :visible.sync="deleteArticleVisible"
                            width="40%" center>
                            <span>
                                <h4 class="text-center"> Are you Sure You Want Delete this Article</h4>
                            </span>
                                <span slot="footer" class="dialog-footer">
                                <el-button @click="clearData()">Cancel</el-button>
                                <el-button type="danger"  @click.prevent="deleteArticle(scope.row)">Delete</el-button>
                            </span>
                     </el-dialog>

                </template>
                </el-table-column>
         </el-table>

                <ul class="mb-4 mt-4">
                    <!-- {{ArticleData }} -->
                    <pagination :data="ArticleData.Article" @pagination-change-page="getResults"  :limit="1" :show-disabled='true'>
                        <span slot="prev-nav">&lt; </span>
                        <span slot="next-nav"> &gt;</span>
                    </pagination>
                </ul>

    </div>

</template>


<script>
  export default {
    data() {
      return {
        ArticleData: [],
        search: '',
        dialogVisible: false,
        editArticleVisible: false,
        deleteArticleVisible: false,
        catigoryData:[],
        form:{
            title:'',
            body:'',
            category_id:'',

        },
        errors:{},
      }
    },
    methods: {
        createArticle(){
            this.form = {}
            this.dialogVisible = true
        },
      addNewArticle(){
          axios.post('/admin/adminArticle', this.form).then(res => {
                        flash('Article added Successfully', 'success');
                         $('#success').html(res.data.message);
                                this.getArticle();
                                this.clearData();
                    }
                ).catch(err => this.errors = err.response.data.errors);

        },
         getArticle(){
          axios.get('adminArticle').then(res => { this.ArticleData = res.data; }).catch(err => console.log(err));
          },
        processFile(event) {
        let file = event.target.files[0]
        let reader = new FileReader();
            if(file['size'] < 3111775)
            {
                reader.onloadend = (file) => {
                // console.log('RESULT', reader.result)
                    this.form.image = reader.result;
                }
                    reader.readAsDataURL(file);
            }else{
                alert('File size can not be bigger than 3 MB')
            }
        },
      editArticle(row) {
          this.editArticleVisible = true
          this.form = row;
        },
        updateArticle(row){
             axios.put(`/admin/adminArticle/${row}`, this.form ).then(res => {
                        flash('Article Edit Successfully', 'success');
                         $('#success').html(res.data.message);
                                this.getArticle();
                                this.clearData();
                    }
                ).catch(err => this.errors = err.response.data.errors);
        },
        deleteArticle(row){
            axios.delete(`/admin/adminArticle/${row.id}`).then(res => {
                 flash('Article Deleted Successfully', 'success');
                 $('#success').html(res.data.message);
                this.getArticle();
                this.deleteArticleVisible = false;
                }).catch(err => console.log(err));
        },
        handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
        getcatigory(){
          axios.get('adminCatigory').then(res => { this.catigoryData = res.data; }).catch(err => console.log(err));
      },
       getResults(page = 1) {
			axios.get('adminArticle?page=' + page)
				.then(response => {
					this.ArticleData = response.data;
				});
		},
        clearData(){
            this.errors = {}
            this.dialogVisible = false
            this.editArticleVisible = false
            this.deleteArticleVisible = false
            this.form = {}
        },
         catigoryName(catigoryOrBrandId){
             console.log(this.catigoryData);
              for (let index = 0; index <  this.ArticleData.catigory.length; index++) {
                        const element = this.ArticleData.catigory[index];
                            if(catigoryOrBrandId == element.id){
                                var catigoryName =  element.name;
                            }
                    }
                     return catigoryName;
         }
    },
    created(){
        this.getArticle();
        this.getcatigory();
    }
  }
</script>
