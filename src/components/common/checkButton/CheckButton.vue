<template>
    <div class="check" :class="{checked:isChecked}">
        <div class="item">
            <img src="~assets/img/cart/tick.svg" alt="">
        </div>
    </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
    .check {
        height: 100%;
        width: 20px;
        display: flex;
        align-items: center;
    }
    .check .item{
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 1px solid #ccc;
        position: relative;
    }
    .item img {
        position: absolute;
        top: 0;
        left: 0;
    }

    .checked .item{
        background-color: #f00;
        border: 1px solid #f00;
    }


</style>