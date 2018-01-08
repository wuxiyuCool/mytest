<template>
  <div class="SK-headline-list-content">
    <div class="SK-slider-container">
      <div @click="preclick" class="prev-button button">
        <i class="fa fa-angle-left"> <</i>
      </div>
      <div @click="nextclick" class="next-button button">
        <i class="fa fa-angle-right"> ></i>
      </div>
      <div class="SK-slider-block">
        <div ref="headImg" class="SK-image-list">
          <div ref="ImgWidth" v-for="(item,index) in img" class="SK-slider-item">
            <a class="headline-link" href="https://www.sonkwo.com/headlines/423" alt="" :style="bgimg(item)"></a>
          </div>
        </div>
      </div>
      <div class="SK-page1">
        <i @click="pageIndex(index)" v-for="(item,index) in dot" class="fa fa-circle" :class="{active: imgIndex === index}"></i>
      </div>
    </div>
    <div class="SK-headline-list-bottom">
      <div class="SK-left-part1">
        <div class="SK-tabs-container1">
          <div class="SK-tabs-buttons1">
            <div v-for="(item,index) in titleData" class="tabs-button" :class="{active: showIndex === index}">
              <a @click="changeshowIndex(index)"  href="javascript:void(0);">{{item}}</a>
            </div>
          </div>
          <div class="SK-tabs-content1">
            <div v-if="showIndex === 0" class="SK-tabs-item-container1">
              <div class="SK-headline-list">
                <HDBlock></HDBlock>
                <HDBlock></HDBlock>
              </div>
            </div>
            <div v-if="showIndex === 1" class="SK-tabs-item-container1">
              <div class="SK-headline-list">
                <HDBlock></HDBlock>
                <HDBlock></HDBlock>
              </div>
            </div>
            <div v-if="showIndex === 2" class="SK-tabs-item-container1">
              <div class="SK-headline-list">
                <HDBlock></HDBlock>
                <HDBlock></HDBlock>
              </div>
            </div>
            <div v-if="showIndex === 3" class="SK-tabs-item-container1">
              <div class="SK-headline-list">
                <HDBlock></HDBlock>
                <HDBlock></HDBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="SK-right-part1">
        <Tui></Tui>
      </div>
    </div>
  </div>
</template>
<script>
  import HDBlock from '@/base/headlinesBlock/headlinesBlock'
  import Tui from '@/base/tuijian/tuijian'
  export default {
    data () {
      return {
        dot: [],
        showIndex: 0,
        dotIndex: 0,
        img: ['https://s1.sonkwo.com/FhM4o_lhGCA3uwJXDDQEfy9YArdf', 'https://s1.sonkwo.com/FipNrwDpfLL4BWkx32Vh53wMYnhZ', 'https://s1.sonkwo.com/Fqq2rjodRapYfUavGFBVaeHXWXIk', 'https://s1.sonkwo.com/FnUcWupYZTtLHTlzq72ZPB04CWcW', 'https://s1.sonkwo.com/FqWg8AYtzOzgtqW6mIpIhB1CQAI0'],
        imgIndex: 0,
        titleData: ['资讯', '文章', '电台', '视频', '评测'],
        Timeout: ''
      }
    },
    mounted () {
      setTimeout(() => {
        this._dots()
        this._lunbo()
      }, 100)
    },
    methods: {
      bgimg (item) {
        return `background-image: url(${item});`
      },
      preclick () {
        this.imgIndex -= 1
        const IMGx = this.$refs.ImgWidth[0].clientWidth
        const lenth = this.$refs.ImgWidth.length
        if (this.imgIndex < 0) {
          this.imgIndex = lenth - 1
        }
        this.$refs.headImg.style.left = `-${this.imgIndex * IMGx}px`
      },
      nextclick () {
        this.imgIndex += 1
        const IMGx = this.$refs.ImgWidth[0].clientWidth
        const lenth = this.$refs.ImgWidth.length
        if (this.imgIndex > (lenth - 1)) {
          this.imgIndex = 0
        }
        this.$refs.headImg.style.left = `-${this.imgIndex * IMGx}px`
      },
      pageIndex (index) {
        this.imgIndex = index
        const IMGx = this.$refs.ImgWidth[0].clientWidth
        this.$refs.headImg.style.left = `-${this.imgIndex * IMGx}px`
      },
      changeshowIndex (index) {
        this.showIndex = index
      },
      _dots () {
        this.dot = new Array(this.img.length)
      },
      _lunbo () {
        this.Timeout = setTimeout(() => {
          this.imgIndex += 1
          this.dotIndex += 1
          if (this.imgIndex > 4) {
            this.imgIndex = 0
          }
          this.pageIndex(this.imgIndex)
        }, 5000)
      }
    },
    components: {
      HDBlock,
      Tui
    },
    watch: {
      imgIndex (newIndex) {
        if (this.Timeout) {
          clearTimeout(this.Timeout)
        }
        this._lunbo()
      }
    }
  }
</script>
<style>
  .SK-right-part1{
    width: 325px;
    margin: 0 15px;
    background: #ffffff;
  }
  .SK-tabs-buttons1 .tabs-button.active a{
    font-size: 14px;
    color: #000;
  }
  .SK-tabs-buttons1 .tabs-button a{
    color: #a4a4a4;
    font-size: 14px;
  }
  .SK-tabs-container1 .SK-tabs-content1 .SK-tabs-item-container1.active {
    display: block;
  }
  .SK-tabs-container1 .SK-tabs-content1 {
    margin-top: 20px;
    background: #ffffff;
  }
  .SK-tabs-container1 .SK-tabs-buttons1 .tabs-button {
    float: left;
    font-size: 16px;
    height: 54px;
    line-height: 54px;
    border-width: 4px 0 0;
    border-style: solid;
    border-color: transparent;
    padding: 0 40px;
  }
   .SK-left-part1 {
    width: 760px;
  }
   .SK-tabs-container1 .SK-tabs-buttons1 .tabs-button.active{
     border-color: #eb6100;
     background: #ffffff;
     color: #a0a0a0;
   }
   .SK-tabs-container1 .SK-tabs-buttons1 {
     height: 58px;
     background: #f7f7f7;
   }
  .SK-headline-list-bottom{
    width: 1100px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .SK-page1 {
    position: absolute;
    width: 100%;
    z-index: 2;
    bottom: 10px;
    text-align: center;
  }
  .SK-page1 i {
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 20px;
    border-radius: 50%;
    background: #9c8a8a;
    margin: 0 10px;
  }
  .SK-page1 .active {
    background: #403636;
  }
  .SK-headline-list-container .SK-headline-list-content .SK-slider-container .SK-slider-item {
    min-width: 1200px;
  }
  .headline-link {
    display: block;
    height: 400px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    min-width: 1200px;
  }
  .SK-slider-container .SK-slider-block .SK-image-list .SK-slider-item {
    width: 100vw;
    height: 400px;
    float: left;
    text-align: center;
    overflow: hidden;
  }
  .SK-slider-container .SK-slider-block .SK-image-list {
    width: 9999px;
    position: relative;
    left: 0;
    transition: all 0.6s ease-in-out;
  }
  .SK-slider-container .SK-slider-block {
    position: relative;
    overflow: hidden;
  }
  .SK-slider-container .button .fa {
    color: #ffffff;
    font-size: 50px;
    padding: 10px 20px;
    background: #000;
  }
  .SK-slider-container .next-button {
    right: 0;
  }
  .SK-headline-list-content{
    padding-top: 110px;
    padding-bottom: 31px;
    min-height: calc(100vh - 285px);
    background: #202539;
  }
  .SK-slider-container{
    height: 400px;
    position: relative;
  }
  .SK-slider-container .prev-button {
    left: 0;
  }
  .SK-slider-container .button {
    position: absolute;
    top: 0;
    height: 100%;
    line-height: 400px;
    cursor: pointer;
    z-index: 2;
  }
</style>
