<template>
 <div class="container-fluid">
    <div class="row">
	 <div class="col-lg-12">
        <div class="text-center">
            <h3>Update Services</h3>
			<br>
           <router-link to="/admin-service/add" ><button class="btn btn-success">Add New</button></router-link>
        </div>
	</div>
		<br>
        <hr>
<app-service v-for="quote in quotes" :qt="quote" :key="quote.id" @quoteDeleted="onQuoteDeleted($event)"></app-service>
    </div>
	</div>
</template>
<script type="text/babel">
    import Quote from './quote.vue';
    import axios from 'axios';
		export default {
		        data() {
		            return {
		                quotes: []		          
					  }
		        },
		        methods: {
		            onGetQuotes() {
		                axios.get('http://localhost:8000/api/quotes')
		                        .then(
		                                response => {
		                    this.quotes = response.data.quotes;
							
		                }
		                        )
		                .catch(
		                        error => console.log(error)
		                );
		            },
		            onQuoteDeleted(id) {
		                const position = this.quotes.findIndex((element) => {
		                            return element.id == id;
		                        });
		                this.quotes.splice(position, 1);
		            }
		        },
		        mounted: function () {
		           this.onGetQuotes();
		        },
		        components: {
		            'app-service':Quote
		        }
		    }
</script>