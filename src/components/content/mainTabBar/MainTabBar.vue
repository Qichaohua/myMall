<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="#FF5777">
            <div slot="title">首页</div>
            <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
            <img slot="icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="#FF5777">
            <div slot="title">分类</div>
            <img slot="icon" src="~assets/img/tabbar/category.svg" alt="">
            <img slot="icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="#FF5777">
            <div slot="title">购物车</div>
            <img slot="icon" src="~assets/img/tabbar/shopcart.svg" alt="">
            <img slot="icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="#FF5777">
            <div slot="title">我的</div>
            <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="">
            <img slot="icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from 'components/common/tabBar/TabBar'
    import TabBarItem from 'components/common/tabBar/TabBarItem'
    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem
        },
      // mounted(){
      //   isShowTabbar(()=>{
      //     let res = true;
      //     if(this.$route.path='/detail'){
      //       res = false
      //     }else if(this.$route.path='/home'){
      //       res = true
      //     }
      //     return res;
      //   })
      // }
    }
</script>

<style scoped>

    .picLogo{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 49px;
        flex:1;
        font-size: 0;
        /*text-align: center;*/
        /*vertical-align: middle;*/
    }
    .picLogo img{
        width: 40px;
        height: 40px;

    }
</style>