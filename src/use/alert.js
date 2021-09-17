import {useStore} from 'vuex'
import {computed} from 'vue'
export function NewAlert(){
    const store = useStore()
    const TITLE_MAP = {
      success: 'Успешно!',
      error: 'Ошибка!',
      warning: 'Внимание!',
      info: 'Информация!'
    }
    const message = computed(()=> store.state.message)
    const title = computed(()=>message.value?
    TITLE_MAP[message.value.type]: null
    )

  return{
    message,
    title,
    close: () => store.commit('clearMessage')
  }
}