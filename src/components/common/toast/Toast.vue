<template>
    <div class="toast" v-show="isShow">
        <span>{{message}}</span>
    </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      message:{
        type:String,
        default:'默认内容'
      },
      isShow:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      show(message= '默认内容',duration=2000){
        this.isShow = true;
        this.message = message;

        setTimeout(()=>{
          this.isShow = false;
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
    .toast {
        font-size: 18px;
        padding: 5px 10px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 3;
        background-color: rgba(0,0,0,.8);
        color: #fff;
        border-radius: 5px;
    }

</style>