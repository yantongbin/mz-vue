<template>
  <div>
    <Banner :banners="bannerList"></Banner>
    <div class="main_header">
      <ul>
        <li :class="['li-style',{active: curType === item.id}]"
            v-for="item in filmType"
            :key = "item.id"
            @click="chageType(item)"
        >
          <span>{{item.name}}</span>
        </li>
        <div class="main_header_line"
             :style="tabBarLink"
        >
          <span class="main_header_line_box"></span>
        </div>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Banner from '../components/banner.vue'
import axios from 'axios'
export default {
  data () {
    return {
      bannerList: [],
      curType: this.$route.path.substring(11),
      filmType: [
        { id: 'nowPlaying', name: '正在热映', href: '/fristPage/nowPlaying' },
        { id: 'upComing', name: '即将上映', href: '/fristPage/upComing' }
      ]
    }
  },
  computed: {
    tabBarLink () {
      let obj = {
        width: '50%',
        transform: 'translate3d(0%,0,0)'
      }
      if (this.curType === 'upComing') {
        obj.transform = 'translate3d(100%,0,0)'
      }
      return obj
    }
  },
  components: {
    Banner
  },
  methods: {
    /**
     * 请求轮播图的数据
     */
    getBannerList () {
      axios
        .get('https://m.maizuo.com/gateway?type=2&cityId=220100&k=4948649', {
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"1.0.0","e":"15547249332104533975391"}',
            'X-Host': 'mall.cfg.common-banner'
          }
        })
        .then(res => {
          let data = res.data
          if (data.status === 0) {
            this.bannerList = data.data
          } else {
            alert(res.msg)
          }
        })
    },
    chageType (item) {
      this.curType = item.id
      this.$router.push(item.href)
    }
  },
  created () {
    this.getBannerList()
  }
}
</script>
<style lang="scss">
.main_header {
  width: 100%;
  height: 0.48rem;
  display: flex;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    .li-style {
      width: 50%;
      text-align: center;
      height: 0.16rem;
      line-height: 0.16rem;
      cursor: pointer;
      color: #191a1b;
    }
    .active{
      color: #ff5f16;
    }
    .main_header_line {
      position: absolute;
      margin: auto;
      top: 0.46rem;
      left: 0;
      .main_header_line_box {
        width: 0.56rem;
        border-bottom: 0.02rem solid #ff5f16;
        border-radius: 0.2rem;
        display: block;
        margin: auto;
      }
    }
  }
}
</style>
