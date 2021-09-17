<template>
  <form @submit.prevent="onSubmit">
      <div :class="['form_control',{invalid: lError}]">
          <label for="link">Введите ссылку</label>
          <input id="link" v-model="link" type="text" @blur="lBlur" placeholder="Link input"/>
          <small v-if="lError">{{lError}}</small>
      </div>
      <div class="form_control">
          <label for="comment">Введите комментарий</label>
          <textarea id="comment" v-model="comment" type="textarea" placeholder="Some comments"/>
      </div>
      <n-button type="primary" attr-type="submit"  :disabled="isSubmitting">Отправить</n-button>
</form>
</template>

<script>
import { NButton} from 'naive-ui'
import {useLinksForm} from '../use/link-form'
import {useStore} from 'vuex'
export default {
   components:{
     NButton
   },
   setup(_,{emit}){
     const store = useStore()
     const submit = async values =>{

      await store.dispatch('linkStore/create', values)
      emit('created')
    }
     return{
        ...useLinksForm(submit)
     }
   }

}
</script>

<style scoped>
.form{
  max-width: 100%;
}
.form_control {
    margin-bottom: 0.5rem;
    position: relative;
}
.form_control input,
.form_control select,
.form_control textarea{
    font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
    margin: auto;
    outline: none;
    border: 2px solid #ccc;
    display: block;

    width: 90%;
    color: #2c3e50;
    padding: 0.5rem 1.5rem;
    border-radius: 3px;
    font-size: 1rem;
    resize: none;
}
.form_control label {
    display: block;
    margin: 0 0 0.3rem 0.3rem;
    font-weight: 500;
}

.form_control input:active,
.form_control input:focus {
    transition: border 0.22s;
    border: 2px solid #42b983;
}
.form_control small{
     color: red;

   }
.form_control.invalid input {
    border-color: #e53935;
}
</style>