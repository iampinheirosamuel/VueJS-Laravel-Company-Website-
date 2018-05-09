<template>
<div class="container-fluid">
 <div class="row">
    <div v-if="editing">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
         <div class="card card-default">
            <div class="form-group" id="form__group">
                <label for="content"><b>Edit Service</b></label><br>
               
                <br>
                 
                 <div class="col" v-if="image">
                    <img :src="image" class="img-fluid">
                </div>
                <br>
                <hr>
                <div class="col">
                    <input type="file" v-on:change="onImageChange" class="form-control">
                </div>
                 <i> Service title</i>
                    <div class="col">
                              <textarea id="content" v-model="title" class="form-control"></textarea>
                    </div>
                <i> Service content</i>
                <textarea id="content" v-model="editValue" rows="10" cols="10" class="form-control"></textarea>
                <div class="control_1">
                    <button @click="onUpdate" class="btn btn-success btn-small">Save</button>
                    <button @click="onCancel" class="btn btn-danger btn-small">Cancel</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div v-if="!editing">
        <div class="col-lg-12 col-md-4 col-sm-6 col-xs-12">
            <div class="card card-default">
            <div class="quote-holder">
             <div class="col" v-if="image">
                     <img :src="image" class="img-fluid">
            </div>
            <br>
            <hr> 
               <div class="quote">
                    <h3>{{ qt.title }}</h3>
                </div>
              
                <div class="quote">
                    {{ qt.content }}
                </div>
<div class="quote_control">
                    <div>
                        <div class="control_1">
                            <button @click="onEdit" class="btn btn-primary btn-small">
                                Edit
                            </button>
                            <button @click="onDelete" class="btn btn-danger btn-small">
                                Delete
                            </button>
                        </div>
<div class="control_2">
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</template>


<script type="text/babel">
    let baseUrl = "http://localhost:8000/";
    import axios from 'axios';
export default {
        props: ['qt'],
        data() {
            return {
                editing: false,
                editValue: this.qt.content,
                title: this.qt.title,
                image: baseUrl + this.qt.image,
                baseUrl
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
            onEdit() {
                this.editing = true;
                this.editValue = this.qt.content;
                this.title = this.qt.title;
                
            },
            onCancel() {
                this.editing = false;
            },
            onDelete() {
                this.$emit('quoteDeleted', this.qt.id);
                axios.delete('http://localhost:8000/api/quote/' + this.qt.id)
                        .then(
                                response => console.log(response)
            )
            .catch (
                        error => console.log(error)
            )
            },
            onUpdate() {
                this.editing = false;
                this.qt.content = this.editValue;
                axios.put('http://localhost:8000/api/quote/' + this.qt.id,
                        {
                            content: this.editValue,
                            title: this.title,                            
                            image: this.image
                            
                            })
                        .then(
                                response => console.log(response)
            )
            .catch (
                        error => console.log(error)
            )
                ;
            }
        }
    }
</script>


<style scoped>
a {
        cursor: pointer;
    }
.quote {
        display: block;
        margin-left: auto;
        margin-right: auto;
        /*min-height: 125px;*/
    }
.quote-holder {
        background: #ffffff;
        margin-bottom: 30px;
        position: relative;
        overflow: hidden;
        padding: 20px;
        min-height: 250px;
    }
    .quote_btn {
        border-radius: 0;
        width: 100%;
        display: block;
        cursor: pointer;
    }
.quote_control {
        width: 100%;
        display: flex;
        padding: 20px 20px 15px;
        background: #FFF;
    }
.control_1 {
        flex: 2;
    }
    .control_2 {
        flex: 1;
        /*display: flex;*/
        justify-content: flex-end;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        color: #51D2B7;
    }
#form__group{
        box-sizing: border-box;
        overflow: hidden;
    }
textarea {
        margin: 10px 0;
    }
</style>