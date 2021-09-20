<template>

  <div v-if="links">
     <transition-group name="app-all-link">
      <app-link  v-for="link in links" :key="link.id" :link="link"></app-link>
     </transition-group>
  </div>
  <h3 v-else>Нет подходящих ссылок</h3>
</template>


<script>
// import { computed, ref,watch } from 'vue'
// import {useStore} from 'vuex'
// import {NSelect} from 'naive-ui'
import AppLink from './AppLink'


export default {

   components:{
     AppLink,


   },
   props:['links'],






}
</script>
<style scoped>
.app-all-link-move {
  transition: transform 0.4s ease;
}
</style>