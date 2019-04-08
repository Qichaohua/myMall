<template>
    <div class="img-info">
        <div class="desc-top">
            <div class="lt"></div>
            <div class="desc">{{detailInfo.desc}}</div>
            <div class="rb"></div>
        </div>
        <div class="imgList" v-for="(item,index) in detailInfo.detailImage">
            <p class="img-title">{{item.key}}</p>
            <div v-for="url in item.list" class="img-item">
                <img :src="url" alt="" @load="detailImgLoad">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DetailImgInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
  methods:{
      detailImgLoad(){
        this.$emit('detailImgLoad')
      }
  }
  }
</script>

<style scoped>
    .img-info {
        padding: 20px 0;
    }
    .desc-top {
        width: 100%;
        padding: 20px 0;
        position: relative;
    }
    .desc-top .lt,
    .desc-top .rb{
        height: 5px;
        width: 100px;
        border-bottom: 1px solid #aaa;
        position: absolute;
    }
    .desc-top .lt{
        top: 0;
        left: 15px;
        border-left: 5px solid #000;
    }
    .desc-top .rb{
        position: absolute;
        bottom: 0;
        right: 15px;
        border-right: 5px solid #000;
    }
    .desc-top .desc {
        height: 100%;
        padding: 0 15px;
        font-size: 14px;
    }

    .imgList {
        font-size: 0;
    }
    .imgList .img-title {
        font-size: 15px;
        padding: 10px;
    }

    .imgList img{
        width: 100%;
    }
</style>