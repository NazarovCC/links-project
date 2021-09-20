<template>

     <n-card
     :title="date"
     :class="['mt_20',{'reading': onelink.isReading

     }]">
        <div class="card_body">
           <div class="card_body_text">
               <a :href="onelink.link">{{onelink.link}}</a>
            <p v-if="onelink.comment">{{onelink.comment}}</p>
           </div>
           <div class="fav_icon" >
              <n-icon v-if="!onelink.isFavorice" size="40" @click="willFavorice">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M22.45 6a5.47 5.47 0 0 1 3.91 1.64a5.7 5.7 0 0 1 0 8L16 26.13L5.64 15.64a5.7 5.7 0 0 1 0-8a5.48 5.48 0 0 1 7.82 0l2.54 2.6l2.53-2.58A5.44 5.44 0 0 1 22.45 6m0-2a7.47 7.47 0 0 0-5.34 2.24L16 7.36l-1.11-1.12a7.49 7.49 0 0 0-10.68 0a7.72 7.72 0 0 0 0 10.82L16 29l11.79-11.94a7.72 7.72 0 0 0 0-10.82A7.49 7.49 0 0 0 22.45 4z" fill="currentColor"></path></svg>
              </n-icon>
              <n-icon v-else size="40" @click="wasFavorice">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"></path></svg>
              </n-icon>
          </div>
        </div>

           <div class="btn_space">
               <n-button type="primary" :disabled="onelink.isReading" @click="updateReading">Как прочитано</n-button>
               <n-button type="error" @click="deleteLink">Удалить</n-button>
           </div>

     </n-card>

</template>

<script>
import {NCard, NButton, NIcon} from 'naive-ui'
import {useStore} from 'vuex'
import {ref, computed} from 'vue'
export default {
   props:{
     link:{
       type: Object,
     }
   },
   setup(props){
     const store = useStore()
     const onelink = ref(props.link)
     const favBuff = ref(false)
     const deleteLink = async()=>{
        await store.dispatch('linkStore/remove',props.link.id)

     }
     const updateReading = async()=>{
       onelink.value.isReading= true
       await store.dispatch('linkStore/onUpdated',props.link)

     }
     const willFavorice = async()=>{
       onelink.value.isFavorice= true
       await store.dispatch('linkStore/onUpdatedFav',props.link)
     }
      const wasFavorice = async()=>{
       onelink.value.isFavorice= false
       await store.dispatch('linkStore/onUpdatedNoFav',props.link)

     }
     const date = computed(()=>new Date(onelink.value.date).toLocaleString())
     return{
       deleteLink,
       updateReading,
       willFavorice,
       wasFavorice,
       onelink,
       date,
       favBuff
     }
   },
   components:{NCard, NButton, NIcon}
}
</script>


<style scoped>
.card_body{
   display: flex;
  justify-content: space-between;
}
.btn_space{
  display: flex;
  justify-content: space-between;
}
.reading{
  background-color: rgba(253, 124, 110);
  border-color: rgba(253, 124, 110);
}
</style>