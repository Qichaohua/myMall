<template>
    <nav-bar class="nav-bar">
        <div slot="left" @click="backClick">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div class="center" slot="center">
            <div v-for="(item,index) in titles"
                 :class="{active:currentIndex === index}"
                 @click="itemClick(index)"
            >{{item}}</div>
        </div>
    </nav-bar>
</template>

<script>
    import NavBar from 'components/common/navBar/NavBar'
  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        titles:['商品', '参数', '评论', '推荐'],
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit('itemClick',index)
      },
      backClick(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
    .nav-bar {
        position: fixed;
        z-index: 9;
        background-color: #fff;
    }

    img{

        margin-top: 10px;
    }
    .center{
        display: flex;
    }
    .center>div{
        flex: 1;
        font-size: 14px;
    }
    .active {
        color: var(--color-high-text);
    }
</style>