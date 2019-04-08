import Toast from './Toast'

const obj = {}
//设置install方法

obj.install= Vue=>{
  //1.创建构造器
  const toastConstructor = Vue.extend(Toast);

  //2.创建实例
  const toast = new toastConstructor();

  //3.将组件对象手动挂载到一个元素上
  toast.$mount(document.createElement('div'));

  //4.将组件对应的元素添加到文档中(通过组件名.$el获取元素)
  document.body.appendChild(toast.$el)

  //5.设置vue的原型对象$toast
  Vue.prototype.$toast = toast;

};

export default obj;