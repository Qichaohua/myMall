<template>
    <div class="toTop">
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
  export default {
    name: "BackToTop"
  }
</script>

<style scoped>
    .toTop {
        position: fixed;
        right: 3px;
        bottom: 50px;
    }
    img{
        width: 40px;
        height: 40px;
    }
</style>