import {useForm, useField} from 'vee-validate'
import * as yup from 'yup'




export function useLinksForm(fn) {
   const {handleSubmit,isSubmitting} = useForm()
   const {value: link, errorMessage: lError, handleBlur: lBlur} = useField(
    'link',
    yup.string()
    .trim()
    .min(5, 'Введите кол-во символов больше 5')
    .required('Введите ссылочку')
    )
  const {value: comment , handleBlur: cBlur} = useField(
    'comment',
     yup.string()
     .trim()
  )
    const onSubmit = handleSubmit(fn)
  return {
     onSubmit,
     isSubmitting,
     link,
     lError,
     lBlur,
     comment,
     cBlur
  }

}