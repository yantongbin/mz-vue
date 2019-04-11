<template>
  <div>
    <section id="banner_wrapper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="item in banners"
               :key = "item.bannerId"
          >
            <img :src="item.imgUrl" alt>
          </div>
          <!-- <div class="swiper-slide">
            <img src="../style/images/img/banner2.jpg" alt>
          </div>
          <div class="swiper-slide">
            <img src="../style/images/img/banner3.jpg" alt>
          </div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </section>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';
  export default{
    props:{
      banners:{
        type:Array,
      }
    },
    data(){
      return{
        swiper: null
      }
    },
    updated(){
      if(!this.swiper){
        this.swiper = new Swiper('.swiper-container',{
          loop:true,
          pagination: {
          el: '.swiper-pagination',
          },
        })
      }
    }
  } 
</script>

<style lang="scss" scoped>
#banner_wrapper {
  width: 100%;
  height: 2rem;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

