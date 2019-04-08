<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
    .nav-bar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        height: 44px;
        width: 100%;
        line-height: 44px;
        text-align: center;
        display: flex;
    }
    .left,.right {
        width: 60px;
    }

    .center{
        flex: 1;
    }
</style>