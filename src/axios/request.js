import axios from 'axios'


const axiosPath = axios.create({
  baseURL: 'https://vue-links-99a30-default-rtdb.firebaseio.com'
})

export default axiosPath