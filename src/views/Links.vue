<template>

   <h2>Мои ссылочки</h2>
   <h3>Сортировка</h3>
   <n-select v-model:value="value" :options="options"></n-select>
  <n-spin v-if="isLoading" size="large" />
   <app-all-link :links="links">
   </app-all-link>
</template>

<script>
import {useStore} from 'vuex'
import {onMounted, ref, computed, watch} from 'vue'
import {useSelectSort} from '../use/select'
import AppAllLink from '../components/AppAllLink'
import {NSpin, NSelect} from 'naive-ui'

export default {
   components:{
     AppAllLink,
     NSpin,
     NSelect
   },
   setup(){
     const isLoading = ref(false)
     const value = ref()
     const store = useStore()
     onMounted(async ()=>{
        value.value = null
        isLoading.value = true
        await store.dispatch('linkStore/load')
        isLoading.value = false
     })

    const links = computed(()=>store.getters['linkStore/sortLinks'])
    watch(value, val=>{
      store.commit('linkStore/changeSortValue',val)

    })
    // const links = computed(()=>store.getters['linkStore/allLinks'])
     return{
      links,
      ...useSelectSort(),
      isLoading,
      value
     }
   }

}
</script>


<style scoped>

</style>