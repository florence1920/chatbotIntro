<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/common/nav.vue'
import Footer from './components/common/footer.vue'

export default {
  components: {
    Nav, Footer,
  },
  created () {
      this.$store.dispatch('GET_MEMBERS');
      console.log('mounted');
  },
 
}
</script>


<style>
@import './assets/css/reset.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
</style>
