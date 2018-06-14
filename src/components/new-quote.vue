<template>
<div class="container-fluid">
   <div class="row">
        <div class="col-lg-12 col-md-6 col-sm-6 col-xs-12" style="padding:40px;" >
            <form @submit.prevent="onSubmitted" style=" margin:auto; width:600px;">
                <div class="form-group">
                    <label for="content">
                        <p><b>Add New Service </b></p>
                        </label>
                        <br>
                    <div class="card card-default">
                    <div class="card-header">File Upload</div>
                    <div class="card-body">
                       
                          <div class="" v-if="image">
                              <img :src="image" class="img-fluid" >
                           </div> <br>
                          <div class="">
                              <input type="file" v-on:change="onImageChange" class="form-control">
                          </div>
                    <br><br>
                    <p class="card-title" style="font-weight:bold;"> Service title</p>
                    
                    <div class="">
                              <textarea id="content" type="file" v-model="title" class="form-control"></textarea>
                    </div>
                    <br><br>
                    <p  class="card-title" style="font-weight:bold;"> Service content here</p>
                    
                    <textarea name="" id="content" class="form-control"  v-model="quoteContent" cols="10" rows="6"></textarea>
                         
                    
                </div>
                </div>
                    
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-success">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
 </div>
</template>

<script>
 import axios from 'axios';
    export default {
        data() {
            return {
                quoteContent: '',
                title: '',
                image: ''
            }
        },
        methods: {
             onImageChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
           
            onSubmitted() {
                axios.post('http://pell-technologies.com/api/quote',
                        {
                          content: this.quoteContent,
                          title: this.title,
                          image: this.image
                          
                          })
                          .then((response) => {
                          window.location.href = "/";
                          })
                         .catch ((error) => console.log(error)
            )}
        }
    }
</script>

<style scoped>
#content {
    margin-top: 40px;
}
</style>