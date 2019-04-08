import request from './index'

export function getData(type,page) {
  return request({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}

export function getMultiData() {
  return request({
    url:'/home/multidata'
  })
}


