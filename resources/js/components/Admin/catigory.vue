<template>
    <div class="container">
        <div class="card-header border-0">
            <div class="d-flex justify-content-between">
                  <el-button type="primary" round @click.prevent="createCatigory()" >add Catigory <i class="el-icen-plus"></i> </el-button>
            </div>
                <el-dialog
                title="New Catigory"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose" center>
                <span>
                    <el-form label-width="20%" @submit.prevent="addNewCatigory">
                        <el-form-item label="Catigory Name">
                            <el-input placeholder="Catigory Name" v-model="form.name"></el-input>
                            <span class="text-danger" v-if="errors['name']">
                                {{errors['name'][0]}}
                            </span>
                        </el-form-item>
                    </el-form>
                </span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click.prevent="addNewCatigory()">Confirm</el-button>
                </span>
                </el-dialog>

        </div>
            <el-table
                ref="multipleTable"
                :data="catigoryData.data.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%"
                border>
                <el-table-column
                label="Date">
                <template  slot-scope="scope"> {{scope.row.created_at | timeFormat}} </template>
                </el-table-column>
                <el-table-column
                label="Name"
                prop="name">
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
                         <el-button  size="mini"  @click.prevent="editCatigory(scope.row)" >Edit</el-button>
                                 <el-dialog
                                    title="Edit Catigory"
                                    :visible.sync="editCatigoryVisible"
                                    width="50%"
                                    :before-close="handleClose" center>
                                    <span>
                                        <el-form label-width="20%"  @submit.prevent="editCatigory">
                                            <el-form-item label="Catigory Name">
                                                <el-input placeholder="Catigory Name"  v-model="form.name"></el-input>
                                                <span class="text-danger" v-if="errors['name']">
                                                    {{errors['name'][0]}}
                                                </span>
                                            </el-form-item>
                                        </el-form>
                                    </span>
                                    <span slot="footer" class="dialog-footer">
                                        <el-button @click="editCatigoryVisible = false">Cancel</el-button>
                                        <el-button type="primary"  @click.prevent="updateCatigory(form.id)">Save</el-button>
                                    </span>
                                    </el-dialog>
                    <el-button
                    type="danger"
                    size="mini"
                    @click=" deletecatigoryVisible = true ">Delete</el-button>
                     <el-dialog
                            title="Delete Catigory"
                            :visible.sync="deletecatigoryVisible"
                            width="40%" center>
                            <span>
                                <h4 class="text-center"> Are you Sure You Wand Delete this Catigory</h4>
                            </span>
                                <span slot="footer" class="dialog-footer">
                                <el-button @click="clearData()">Cancel</el-button>
                                <el-button type="danger"  @click.prevent="deleteCatigory(scope.row)">Delete</el-button>
                            </span>
                     </el-dialog>
                </template>
                </el-table-column>
        </el-table>
                <ul class="mb-4 mt-4">
                    <pagination :data="catigoryData" @pagination-change-page="getResults"  :limit="1" :show-disabled='true'>
                        <span slot="prev-nav">&lt; Previous</span>
                        <span slot="next-nav">Next &gt;</span>
                    </pagination>
                </ul>
    </div>

</template>


<script>
  export default {
    data() {
      return {
        catigoryData: [],
        search: '',
        dialogVisible: false,
        editCatigoryVisible: false,
        deletecatigoryVisible: false,
        form:{
            name:'',
        },
        errors:{},
      }
    },
    methods: {
        createCatigory(){
            this.form = {}
            this.dialogVisible = true
        },
      addNewCatigory(){
          axios.post('/admin/adminCatigory', this.form).then(res => {
                        flash('Catigory added Successfully', 'success');
                         $('#success').html(res.data.message);
                                this.getcatigory();
                                this.clearData();
                    }
                ).catch(err => this.errors = err.response.data.errors);

        },
      editCatigory(row) {
          this.editCatigoryVisible = true
          this.form = row;
        },
        updateCatigory(row){
             axios.put(`/admin/adminCatigory/${row}`, this.form ).then(res => {
                        flash('Catigory Edit Successfully', 'success');
                         $('#success').html(res.data.message);
                                this.getcatigory();
                                this.clearData();
                    }
                ).catch(err => this.errors = err.response.data.errors);
        },
        deleteCatigory(row){
            axios.delete(`/admin/adminCatigory/${row.id}`).then(res => {
                 flash('Catigory Deleted Successfully', 'success');
                 $('#success').html(res.data.message);
                this.getcatigory();
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
          axios.get('adminCatigory').then(res => { this.catigoryData = res.data}).catch(err => console.log(err));
      },
       getResults(page = 1) {
			axios.get('adminCatigory?page=' + page)
				.then(response => {
					this.catigoryData = response.data;
				});
		},
        clearData(){
            this.errors = {}
            this.dialogVisible = false
            this.editCatigoryVisible = false
            this.deletecatigoryVisible = false
            this.form = {}
        }
    },
    created(){
        this.getcatigory();
    }
  }
</script>
