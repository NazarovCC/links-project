<template>
  <app-link v-for="link in links" :key="link.id" :link="link"></app-link>
  <h3 v-if="links.length === 0">Нет подходящих ссылок</h3>
</template>


<script>
//import { ref } from 'vue'
// import {useStore} from 'vuex'
import AppLink from './AppLink'


export default {

   components:{
     AppLink,

   },
   props:['links'],
  //  setup(props){
  //    const allLinks = ref(props.links)
  //    return {
  //     allLinks
  //    }
  //  }




}
</script>