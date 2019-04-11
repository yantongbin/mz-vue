<template>
    <div>
        <Banner :banners='bannerList'></Banner>
    </div>
</template>
<script>
    import Banner from '../components/banner.vue';
    import axios from 'axios';
    export default{
        data(){
            return {
                bannerList: []
            }
        },
        components:{
            Banner
        },
        methods:{
            /**
             * 请求轮播图的数据
             */
            getBannerList(){
                axios.get('https://m.maizuo.com/gateway?type=2&cityId=220100&k=4948649',{
                    headers: {
                        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15547249332104533975391"}',
                        'X-Host': 'mall.cfg.common-banner'                        
                    }
                }).then(res => {
                    console.log(res.data);
                    let data = res.data
                    if(data.status===0){
                        this.bannerList = data.data
                    }else{
                        alert(res.msg)
                    }
                })
            }
        },
        created () {
            this.getBannerList();
        }
    }
</script>

