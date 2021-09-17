<template>
   <div class="navpanel">
        <div class="icon_main">
          <router-link to="/">
             <n-icon size="40">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M18 2h-8L4.02 8L4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z" fill="currentColor"></path></svg>
              </n-icon>

          </router-link>
        </div>
        <div class="buttons_section">
             <n-button type="info" @click="$emit('open')">Создать</n-button>


             <router-link to="/about">
                <n-button class="ml_10" type="info">О проекте</n-button>
             </router-link>
              <router-link to="/favorice">
                   <n-button class="ml_10" type="info">Избранное</n-button>
              </router-link>

        </div>
   </div>
</template>
<script>



//components
import {NButton, NIcon} from 'naive-ui'
export default {
   emits:['open'],

   components:{
     NButton,
     NIcon
     }

}
</script>


<style scoped>
   .navpanel{
     background-color: #FFE4C4;
     height: 40px;
     padding: 10px;
     display: flex;
     align-items: center;
     justify-content: space-between;

   }
   .icon_main{

   }
   .buttons_section{
     display: flex;
     justify-content: space-between;
   }
   .ml_10{
     margin-left: 10px;
   }
</style>