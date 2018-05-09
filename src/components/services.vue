<template>
 <div>
 <div class="container-fluid">

   <div class="container-fluid" style="padding: 0px;">
  <div class="site-hero">
  <img class="hero-logo" src="src/assets/images/logo.png">
  <div class="holder">
  <div class="hero-text">
    <h1>What We Do</h1>
    
  </div>
  </div>
  <div class="gradient"></div>
   <div>
     <img src="src/assets/images/cloudcomputing-course1image_378x225.jpg" alt="" height="300px" width="100%">
   </div>

 </div>
</div>
<br><br>
  
   <div class="row">
    
    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12"  v-for="service in services" :sr="service" :key="service.id">    
        <div class="card">
            <img class="card-img-top img-fluid" :src="baseUrl + service.image" alt="" style="height:200px;" >
            <div class="card-body">
             <br> 
                <h4 class="card-title" style="font-weight:bold;">{{ service.title }}</h4>
               
                <p class="card-text" style="font-size:14px;">{{ service.content }}</p>
                <hr>
                <p class="card-text"><small class="text-muted"> <router-link :to="'/service/' + service.id" >View more...</router-link></small></p>
            </div>
        </div>    
        </div>
        </div>
    </div>
</div>
</template>

<script>
 
 import axios from 'axios';
    let baseUrl = "http://localhost:8000/";
    export default {
        
        data() {
            return {
                services: [],
                baseUrl                
            }
        },
        methods: {
                onGetQuotes() {
		                axios.get('http://localhost:8000/api/quotes')
		                        .then(
		                                response => {
		                    this.services = response.data.quotes;
							
		                }
		                        )
		                .catch(
		                        error => console.log(error)
		                );
                        }
        },
        mounted: function(){
            this.onGetQuotes();
        }
        
    }
</script>

<style scoped>
#content {
    margin-top: 40px;
}
</style>