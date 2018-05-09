<template>
 
  <div class="single">
   <div class="container-fluid" style="padding: 0px;">
  <div class="site-hero">
  <img class="hero-logo" src="src/assets/images/logo.png">
  <div class="holder">
  <div class="hero-text">
    <h1>{{ service.title }}</h1>
    
  </div>
  </div>
  <div class="gradient"></div>
   <div>
     <img src="src/assets/images/cloudcomputing-course1image_378x225.jpg" alt="" height="300px" width="100%">
   </div>

 </div>
</div>
<br><br>
        <div class="container-fluid">
        <div class="row">
        <div class="col-lg-5 col-md-6 col-sm-6 col-xs-12">    
            <div class=" " style="padding:30px;">
                <img class="card-img-top img-responsive" :src="baseUrl + service.image" alt="" style="height:200px;" >
            </div>
        </div> 

            <div class="col-lg-7 col-md-6 col-sm-6 col-xs-12">
             <br> 
                <h4 class="card-title" style="font-weight:bold;">{{ service.title }}</h4>
               
                <p class="card-text" style="font-size:14px;">{{ service.content }}</p>
                <hr>
                <p class="card-text"><small class="text-muted"></small></p>
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
                service: [],
                id: this.$route.params.id,
                baseUrl                
            }
        },
        methods: {
          
           onGetQuote(id) {
		                axios.get('http://localhost:8000/api/quotes/'+ id +'')
		                        .then(
		                                response => {
		                    this.service = response.data.quote;
							
		                }
		                        )
		                .catch(
		                        error => console.log(error)
		                );
                        }
        },
        mounted: function(){
            
            
            this.onGetQuote( this.id);
        }
    }
</script>

<style scoped>
#content {
    margin-top: 40px;
}
</style>