import axios from 'axios'

//1.创建请求函数
export default function request (options){
  //2.创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 10000
  });

  //3.对请求和相应进行拦截
  instance.interceptors.request.use(config =>{
    return config;
  },err => {
    return err
    }
  )

  instance.interceptors.response.use( res => {
    return res.data;
  },err=>{
    return err;
  })

  return instance(options)
}




