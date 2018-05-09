import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Quotes from './components/quotes.vue';
import home from './components/home.vue';
import product from './components/product.vue';
import contact from './components/contact.vue';
import services from './components/services.vue';
import service from './components/service.vue';
import NewQuote from './components/new-quote.vue';

Vue.use(VueRouter);
const routes = [
  { path: '/', component: home },
  { path: '/product', component: product },
  { path: '/contact', component: contact},
  { path: '/services', component: services },
  { path: '/admin-service', component: Quotes},
  { path: '/service/:id', component: service },  
  { path: '/admin-service/add', component: NewQuote },
];

const router = new VueRouter({
  node: 'history',
  routes: routes
});

new Vue({
  el: '#app',
      router: router,
  render: h => h(App)
})