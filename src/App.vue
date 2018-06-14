<!-- App.vue -->
<template>
        
    <div id="view">
      
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-white">
      <a class="navbar-brand" href="#">
        <!--// <img src="src/assets/images/microsoft.jpg"> -->
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
   
    <span class="fa fa-bars" style="color:#003366;"></span>
  </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto linking">
       
          <router-link to="/" tag="li">Home</router-link>
          <router-link to="/services" tag="li">Our Services</router-link>
          <!-- <router-link to="/who-we-are" tag="li">Who We Are</router-link> -->
          <router-link to="/contact" tag="li">Contact</router-link>
         
        </ul>
       
      </div>
    </nav>
  </div>
 
    <!-- navigation. collapse-->
  
      <router-view></router-view>
    </div>
        
</template>

<script type="text/babel">
export default {
  data () {
    return {
}
  }
}
</script>

<style >


</style>
