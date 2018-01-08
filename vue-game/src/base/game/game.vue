<template>
    <div class="body-game-containt">
      <div class="body-game-containt-header">
        <div class="body-game-containt-header-left">
          <div v-for="(item, index) in tagList" class="tag-block">
            <h2 @click="clickshow(index)">{{item}}</h2>
              <div ref="store" v-show="showIndex === index" class="store-tag-type-block"></div>
          </div>
        </div>
        <div class="body-game-containt-header-center">
          <div ref="bannerImg" style="display: flex;width: 100%;transition: all .6s ease">
          <img  v-for="(item,index) in banner1" :src="item" alt="">
          </div>
          <div class="banner-dot"><i @click.prevent="perbanner"> < </i>
            <div  ref="dotPorgrass" class="banner-dot-porgrass">
              <div @click="porgarassDot(index)" v-for="(item,index) in banner1" class="move-dot-porgrass2"></div>
              <div ref="MDP" class="move-dot-porgrass"></div>
            </div>
            <i @click.prevent="nextbanner"> > </i></div>
        </div>
        <div class="body-game-containt-header-right">
          <img ref="banner2img" width="266" height="326" src="https://s1.sonkwo.com/FlCGsKtOLOV1BUzRhsgx78SOkaG8" alt="">
          <div class="banner-dot"><i @click="per1banner"> < </i>
            <div class="banner-dot-porgrass2">
              正在显示{{dotIndex2+1}}/4页
            </div>
            <i @click="next1banner"> > </i></div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        showIndex: 0,
        Timeout: '',
        Timeout1: '',
        dotIndex: 0,
        dotIndex2: 0,
        tagList: ['按类型', '按价格', '按语言', '按系统', '热门标签'],
        banner2: ['https://s1.sonkwo.com/FlCGsKtOLOV1BUzRhsgx78SOkaG8', 'http://7fvk4m.com1.z0.glb.clouddn.com/FhtmXsTAhFi85BMUIRyyciLdY5id', 'http://7fvk4m.com1.z0.glb.clouddn.com/FoaKmv26oMj2hdj_asjICwoDnoqZ', 'http://7fvk4m.com1.z0.glb.clouddn.com/Fv2aW8ixIRm7Y8FMrZgY_lf3u8AY'],
        banner1: ['https://s1.sonkwo.com/FisEWYgpqDeg3TxIU3IaTNAmCw5l', 'https://s1.sonkwo.com/FhMENvIRSfr2s0ai-4GSM_kE-YUV', 'https://s1.sonkwo.com/Fr4vkaNSJ6LCwFkjnxE2g7ZRd4iF', 'https://s1.sonkwo.com/Fi5FdZh9QltFOtYNAhoNdIc4y3U3', 'https://s1.sonkwo.com/FjoFh9IyDadq9PWr0a0k0u83kiAB', 'https://s1.sonkwo.com/Fip-uiCM45m9dmpBBcyckp5pJISe', 'https://s1.sonkwo.com/FsiD5GYDuBHOig9gkYRy3E9WOhrn', 'https://s1.sonkwo.com/FnaRHPv6mAzhFpvSFfwWU4ft5nEB', 'https://s1.sonkwo.com/Fo2Yn-zcQXLt9l77tRSJSjmYO7NK', 'https://s1.sonkwo.com/FnGkw2QQzNsw1amERQOAhaEeX0IB']
      }
    },
    mounted () {
      setTimeout(() => {
        this._lunbo()
      }, 100)
    },
    methods: {
      clickshow (index) {
        this.showIndex = index
        for (let i = 0; i < this.tagList.length; i++) {
          this.$refs.store[i].style.height = 0
        }
        setTimeout(() => {
          this.$refs.store[index].style.height = `147px`
          console.log(this.$refs.store)
        }, 100)
      },
      nextbanner () {
        this.dotIndex += 1
        if (this.dotIndex > 9) {
          this.dotIndex = 0
        }
        this.$refs.MDP.style.left = `${this.dotIndex * 56.69}px`
        this.$refs.bannerImg.style.marginLeft = `-${this.dotIndex * 665}px`
      },
      perbanner () {
        this.dotIndex -= 1
        if (this.dotIndex < 0) {
          this.dotIndex = 9
        }
        this.$refs.MDP.style.left = `${this.dotIndex * 56.69}px`
        this.$refs.bannerImg.style.marginLeft = `-${this.dotIndex * 665}px`
      },
      per1banner () {
        this.dotIndex2 -= 1
        if (this.dotIndex2 < 0) {
          this.dotIndex2 = 3
        }
        this.$refs.banner2img.src = this.banner2[this.dotIndex2]
      },
      next1banner () {
        this.dotIndex2 += 1
        if (this.dotIndex2 > 3) {
          this.dotIndex2 = 0
        }
        this.$refs.banner2img.src = this.banner2[this.dotIndex2]
      },
      porgarassDot (index) {
        this.dotIndex = index
        this.$refs.MDP.style.left = `${this.dotIndex * 56.69}px`
        this.$refs.bannerImg.style.marginLeft = `-${this.dotIndex * 665}px`
      },
      _lunbo () {
        this.Timeout = setTimeout(() => {
          this.dotIndex += 1
          if (this.dotIndex > 9) {
            this.dotIndex = 0
          }
          this.$refs.MDP.style.left = `${this.dotIndex * 56.69}px`
          this.$refs.bannerImg.style.marginLeft = `-${this.dotIndex * 665}px`
        }, 5000)
      }
    },
    watch: {
      dotIndex (newINdex) {
        if (this.Timeout) {
          clearTimeout(this.Timeout)
        }
        this._lunbo()
      }
    }
  }
</script>
<style>
  .body-game{
    width: 100%;
    background: #393D42;
  }
  .body-game-containt{
    width: 1170px;
    margin: 0 auto;
  }
  .move-dot-porgrass2{
    width: 56px;
    height: 16px;
    border-radius: 3px;
    cursor: pointer;
    float: left;
  }
  .body-game-containt-header{
    width: 1170px;
    height: 347px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }
  .body-game-containt-header-left{
    width: 198px;
    height: 347px;
    border-radius: 0 0 3px 3px;
    background: #4a4d4d;
  }
  .tag-block h2{
    padding: 10px 10px;
    margin: 0;
    color: #e4e4e4;
    font-size: 15px;
    cursor: pointer;
    border-top: 1px solid #222;
    background: #4A4D4D;
  }
  .store-tag-type-block{
    /*height: 1px;*/
    height: 147px;
    padding: 0 0 10px 0;
    font-size: 12px;
    overflow: hidden;
    transition: height .9s ease;
    background-color: #222;
  }
  .tag-block{
    width: 198px;
  }
  .body-game-containt-header-center{
    margin: 0 20px;
    height: 347px;
    width: 665px;
    overflow: hidden;
  }
  .banner-dot{
    margin: 2px 0;
  }
  .banner-dot-porgrass{
    width: 564px;
    height: 16px;
    background: #9c9ea0;
    vertical-align: bottom;
    position: relative;
    border-radius: 3px;
    display: inline-block;
  }
  .move-dot-porgrass{
    width: 56px;
    height: 16px;
    background: #4a4d4d;
    border-radius: 3px;
    position: absolute;
    left: 0;
    top: 0;
    transition: all .6s ease;
  }
  .banner-dot i{
    width: 46px;
    height: 16px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    display: inline-block;
    border-radius: 5px;
    transition: left .6s;
    background: #9C9EA0;
  }
  .banner-dot i:hover{
    background: #4A4D4D;
    color: #a4a6a6;
  }
  .body-game-containt-header-right{
    height: 347px;
  }
  .banner-dot-porgrass2{
    width: 165px;
    height: 16px;
    background: #9c9ea0;
    vertical-align: bottom;
    position: relative;
    border-radius: 3px;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    color: whitesmoke;
    display: inline-block;
  }
</style>
