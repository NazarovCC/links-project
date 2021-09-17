<template>
   <h2>Мои ссылочки</h2>
  <n-spin v-if="isLoading" size="large" />
   <app-all-link :links="links">
   </app-all-link>
</template>

<script>
import AppAllLink from '../components/AppAllLink'
import {useStore} from 'vuex'
import {onMounted, ref, computed} from 'vue'
import {NSpin} from 'naive-ui'

export default {
   components:{
     AppAllLink,
     NSpin
   },
   setup(){
     const isLoading = ref(false)
     const store = useStore()
     onMounted(async ()=>{
        isLoading.value = true
        await store.dispatch('linkStore/load')
        isLoading.value = false
     })
     const links = computed(()=>store.getters['linkStore/allLinks'])
     return{
      links,
      isLoading
     }
   }

}
</script>


<style scoped>

</style>