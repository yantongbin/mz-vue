<template>
  <div class="np_main">
    <div class="main_body">
      <ul>
        <li v-for="item in nowPlaying" :key="item.filmId">
          <router-link :to="{ name: 'detail' , params: {id:item.filmId} }">
            <div class="li-a-left">
              <img :src="item.poster">
            </div>
            <div class="li-a-center">
              <div class="li-a-center-frist info-col">
                <span class="name">{{item.name}}</span>
                <span class="item">{{item.item.name}}</span>
              </div>
              <div class="li-a-center-second info-col">
                <span class="lable">观众评分</span>
                <span class="grade">{{item.grade}}</span>
              </div>
              <div class="li-a-center-thrid info-col">
                <span class="lable">主演: {{actorName(item.actors)}}</span>
              </div>
              <div class="li-a-center-fourth info-col">
                <span class="lable">{{item.nation}} | {{item.runtime}}分钟</span>
              </div>
            </div>
            <div class="li-a-right">购票</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="loader_more" @click="loaderMore" v-if="pageNum < totalPage">加载更多...</div>
    <div class="loader_more" v-else>没有了别点了</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      nowPlaying: [],
      pageNum: 1,
      pageSize: 10,
      total: 44
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  methods: {
    getNowPlaying () {
      axios
        .get('https://m.maizuo.com/gateway', {
          params: {
            cityId: 440300,
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            type: 1,
            k: 3611198
          },
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"1.0.0","e":"15547249332104533975391"}',
            'X-Host': 'mall.film-ticket.film.list'
          }
        })
        .then(res => {
          let data = res.data
          if (data.status === 0) {
            this.nowPlaying.push(...data.data.films)
          }
        })
    },
    actorName (data = []) {
      let temp = data.map(item => {
        return item.name
      })
      return temp.join('、')
    },
    loaderMore () {
      this.pageNum++
      this.getNowPlaying()
    }
  },
  created () {
    this.getNowPlaying()
  }
}
</script>

<style lang="scss">
.np_main {
  padding-bottom: 0.5rem;
  .main_body {
    div {
      box-sizing: border-box;
    }
    ul {
      margin-left: 0.15rem;
      margin-top: 0;
      margin-bottom: 0;
      padding: 0;
      li {
        padding: 0.15rem 0.15rem 0.15rem 0;
        height: 0.94rem;
        position: relative;
        a {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 100%;
          .li-a-left {
            height: 100%;
            float: left;
            img {
              width: 0.66rem;
              height: 100%;
              float: left;
            }
          }
          .li-a-center {
            width: calc(100% - 1.16rem);
            padding: 0 10px;
            .li-a-center-frist {
              .name {
                max-width: calc(100% - 0.25rem);
                color: #191a1b;
                font-size: 0.16rem;
                height: 0.22rem;
                line-height: 0.22rem;
                margin-right: 0.05rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .item {
                font-size: 0.09rem;
                color: #fff;
                background-color: #d2d6dc;
                height: 0.14rem;
                line-height: 0.14rem;
                padding: 0 0.02rem;
                border-radius: 0.02rem;
                box-shadow: 0 0 black;
              }
            }
            .info-col {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 100%;
            }
            .li-a-center-second {
              .grade {
                color: #ffb232;
                font-size: 14px;
              }
            }
            .lable {
              font-size: 0.13rem;
              margin-top: 0.04rem;
              color: #797d82;
            }
          }
          .li-a-right {
            float: right;
            line-height: 0.25rem;
            height: 0.25rem;
            width: 0.5rem;
            color: #ff5f16;
            font-size: 0.13rem;
            text-align: center;
            border-radius: 0.02rem;
            position: relative;
            &::after {
              content: " ";
              -webkit-transform: scale(0.5);
              -ms-transform: scale(0.5);
              transform: scale(0.5);
              position: absolute;
              border: 1px solid #ff5f16;
              top: -50%;
              right: -50%;
              bottom: -50%;
              left: -50%;
              border-radius: 0.04rem;
            }
          }
        }
      }
    }
  }
  .loader_more {
    width: 100%;
    text-align: center;
  }
}
</style>
