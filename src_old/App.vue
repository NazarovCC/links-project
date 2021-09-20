<template>
   <nav-bar @open="showModal = true"></nav-bar>
        <teleport to="body">
     <modal-create v-model="showModal"></modal-create>
   </teleport>
   <div class="container mt_20">
      <n-alert :type="message.type" v-if="title" :on-close="close">{{message.value}}</n-alert>
      <router-view></router-view>
   </div>


</template>


<script>
import  {ref} from 'vue'
import {useStore} from 'vuex'
import NavBar from './components/NavBar.vue'
import ModalCreate from './components/ModalCreate.vue'
import {NAlert} from 'naive-ui'
import {NewAlert} from './use/alert'





export default {
   components:{ NavBar,
      ModalCreate,
      NAlert,
   },
   setup(){
      const store = useStore()
      const showModal = ref(false)



     return{
       showModal,
       openModal: ()=>{
         store.commit('openModule')
       },
       ...NewAlert()
     }
   }

}
</script>


<style>


</style>
