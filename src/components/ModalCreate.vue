<template>
  <n-modal
    class="custom-card"
    v-model:show="showModal"
    preset="card"
    :style="bodyStyle"
    title="Создание ссылки"
    :bordered="false"
    size="huge"
    :segmented="{
      content: 'soft',
      footer: 'soft'
    }"
  >
    <template #header-extra></template>
    <app-form @created="showModal = false"></app-form>
  </n-modal>
</template>

<script>
import {ref, watch} from 'vue'
import {NModal} from 'naive-ui'
import AppForm from './AppForm'

export default {
  props:['modelValue'],
  components:
  {NModal,
  AppForm,
  },
  setup (props,{emit}) {
    const showModal = ref(false)
    watch(props, val=>{
        showModal.value = val.modelValue})
    watch(showModal, (val=>{
        emit('update:modelValue',
        val)
    }))



    return {
      bodyStyle: {
        width: '800px'
      },
      segmented: {
        content: 'soft',
        footer: 'soft'
      },
     showModal
    }
  }
}
</script>

<style scoped>

</style>