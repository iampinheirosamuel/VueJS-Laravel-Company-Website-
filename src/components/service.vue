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
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">    
            <div class=" " style="padding:30px;">
                <img class="card-img-top img-responsive" :src="baseUrl + service.image" alt="" style="" >
            </div>
        </div> 

            <div class="col-lg-offset-2 col-md-6 col-sm-6 col-xs-12">
             <br> 
                <h4 class="card-title" style="font-weight:bold;">{{ service.title }}</h4>
               
                <p class="card-text" style="font-size:14px;">{{ service.content }}</p>
                <hr>
                <p class="card-text"><small class="text-muted"></small></p>
                <a href="/#/contact" class="btn btn-large btn-secondary">Get Started</a>
            </div>
           
        </div>
        </div>
   
</div>

</template>

<script>
 import axios from 'axios';
    let baseUrl = "http://pell-technologies.com/";
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
		                axios.get('http://pell-technologies.com/api/quotes/'+ id +'')
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