<template>
    <div class="profilePage">
        <nav-bar class="nav-bar"><div slot="center">我的档案</div></nav-bar>
        <profile-avatar/>
        <profile-account-info/>
        <profile-list-info :list-data="orderList"/>
        <profile-list-info :list-data="serviceList"/>
    </div>
</template>

<script>
    import NavBar from 'components/common/navBar/NavBar'
    import ProfileAvatar from "./childComps/ProfileAvatar";
    import ProfileAccountInfo from './childComps/ProfileAccountInfo'
    import ProfileListInfo from './childComps/ProfileListInfo'

  export default {
    name: "Profile",
    components:{
      ProfileAvatar,
      ProfileAccountInfo,
      ProfileListInfo,
      NavBar
    },
    data() {
      return {
        orderList: [
          {icon: 'message.svg', info: '我的消息'},
          {icon: 'pointer.svg', info: '积分商城'},
          {icon: 'vip.svg', info: '会员卡'},
        ],
        serviceList: [
          {icon: 'cart.svg', info: '我的购物车'},
          {icon: 'shopping.svg', info: '下载购物APP'},
        ]
      }
    }
  }
</script>

<style scoped>
    .profilePage{
        padding-top: 44px;
    }
    .nav-bar{
        background-color: var(--color-tint);
        color: #fff;
    }

</style>