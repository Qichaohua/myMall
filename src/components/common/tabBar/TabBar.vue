<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    import TabBarItem from './TabBarItem'
    export default {
        name: "TabBar",
        components:{
            TabBarItem
        }
    }
</script>

<style scoped>
    .tab-bar {
        display: flex;
        height: 49px;
        background-color: #f5f5f5;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -1px 0 1px rgba(100,100,100,0.3);

    }

</style>