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
        <!-- <li>
            <i class="iconfont"></i>
            <span>影院</span>
        </li>
        <li>
            <i class="iconfont"></i>
            <span>特惠</span>
        </li>
        <li>
            <i class="iconfont"></i>
            <span>我的</span>
        </li> -->
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
        height: 0.5rem;
        position: fixed;
        left: 0;
        bottom:0;
        z-index: 100;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        li{
            .li-color-black{
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #797d82;
            }
            .active{
                color: #ff5f16;
            }
        }
    }
</style>
