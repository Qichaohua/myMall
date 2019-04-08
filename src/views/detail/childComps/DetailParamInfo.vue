<template>
    <div class="paramInfo" v-if="Object.keys(paramInfo).length !== 0">
        <table class="size" v-for="(table,index) in paramInfo.rule.tables" :key="index">
            <tr v-for="(tr,indey) in table" :key="indey">
                <td v-for="td in tr">{{td}}</td>
            </tr>
        </table>

        <table class="info">
            <tr v-for="item in paramInfo.info.set">
                <td>{{item.key}}</td>
                <td>{{item.value}}</td>
            </tr>
        </table>

        <div class="info-img" v-if="paramInfo.info.images">
            <img :src="paramInfo.info.images[0]" alt="">
        </div>

    </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      paramInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
    .paramInfo {
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 5px solid #f2f5f8;
    }
    .paramInfo table{
        width: 100%;
        border-collapse: collapse;
    }

    .paramInfo table tr {
        height: 40px;
        padding: 5px 0;
        border-bottom: 1px solid #ccc;
    }

    .size tr td{
        width: 70px;
    }
    .info {
        padding: 10px 0;
    }
    .info tr {
        padding: 10px 0;
    }
    .info tr td:nth-child(1){
        width: 80px;
    }
    .info tr td:nth-child(2){
        padding: 0 10px;
        color: var(--color-high-text);
    }
    .info-img {
        font-size: 0;

    }
    .info-img img{
        width: 100%;
    }


</style>