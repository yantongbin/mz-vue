<template>
  <div id="home">
    <router-view></router-view>
    <footerBody :tabs="tabs"></footerBody>
  </div>
</template>
<script>
import footerBody from '../components/footer'
export default {
  name: 'home',
  data () {
    return {
      tabs: [
        { name: '电影', href: '/fristPage', icon: 'icon-dianying' },
        { name: '影院', href: '/movie', icon: 'icon-yingyuana' },
        { name: '特惠', href: '/aaa', icon: 'icon-tehui' },
        { name: '我的', href: '/myPage', icon: 'icon-weibiaoti2fuzhi12' }
      ]
    }
  },
  components: {
    footerBody
  }
}
</script>
