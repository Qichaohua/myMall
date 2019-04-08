<template>
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" @load="imgLoad" alt="">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import{Swiper,SwiperItem} from 'components/common/swiper';

  export default {
    name: "HomeSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    methods:{
      //图片的加载事件
      imgLoad(){
        //发送到父组件中
        this.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>

</style>