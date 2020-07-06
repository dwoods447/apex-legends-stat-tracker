import axios from 'axios'
// const instance = axios.create({
//   //baseURL: 'https://apex-tracker-vue-node.herokuapp.com',
//    baseURL: 'http://localhost:3000',
// })
let api
if(process.env.NODE_ENV !== 'production'){
  api = axios.create({
    baseURL: 'http://localhost:3000'
  })
}else {
  api =  axios.create({
    baseURL: 'http://apex-tracker-vue-node.herokuapp.com'
  })
}
export default api