<template>
  <div>
    <Visual></Visual>
    <Summary></Summary>
    <Tech></Tech>
    <People></People>
  </div>
</template>

<script>
import Nav from '../components/common/nav.vue'
import News from '../components/main/news.vue'
import People from '../components/main/people.vue'
import Summary from '../components/main/summary.vue'
import Tech from '../components/main/tech.vue'
import Visual from '../components/main/visual.vue'
export default {
  components: {Nav, News, People, Summary, Tech, Visual},
  
}
</script>
