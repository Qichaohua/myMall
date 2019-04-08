<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item,index) in recommends">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <div class="title">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
    .recommend {
        display: flex;
        padding: 20px 0;

        border-bottom: 8px solid #eee;
    }
    .recommend-item {
        flex: 1;
        text-align: center;
    }
    .recommend-item img{
        width: 85%;
        margin-bottom: 10px;
    }
    .recommend-item .title {
        font-size: 14px;
    }

</style>