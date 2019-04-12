<template>
    <ul class="footer nav-bar">
        <li
            v-for="(item,index) in tabs"
            :key="index"
            >
            <router-link :to="item.href" active-class="active" class="li-color-black">
                <i :class="['iconfont',item.icon]"></i>
                <span> {{item.name}} </span>
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
    .footer{
        width: 100%;
        position: fixed;
        left: 0;
        bottom:0;
        z-index: 100;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        li{
            width: 25%;
            .li-color-black{
                width: 100%;
                height: 0.49rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #797d82;
            }
            .active{
                color: #ff5f16;
            }
        }
    }
</style>
