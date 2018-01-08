<template>
  <div class="header1">
    <div class="header1-list-center">
      <ul class="header1-list-center-left" >
          <a class="header1-list-img" href=""></a>
        <li @click="click(index)" :class="{header1Active : RouterText === item.Router}" v-for="(item,index) in headerTitle" class="header1-list ">
          <router-link tag="div" :to="item.Router">
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
      <div class="header1-list-center-user">
        <div style="overflow: hidden ">
        <transition name="input" >
          <div style="background:#fff;" v-show="currentShow" >
            <div class="input-div">
              <b @click="textValue" class="input-div-b" ref="mySelector">商城</b>
            </div>
            <input class="headerinput"  type="text" placeholder="请输入关键词"><i>丶</i></div>
        </transition>
        </div>
        <i  @click="showInput">丶我就出现</i>
        <span class="header-user">登录</span>
        <span class="header-rigister">注册</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      headerTitle: [{title: '欢迎页', Router: '/recommend'}, {title: '社区', Router: '/shequ'}, {title: '游戏', Router: '/game'}, {title: '周边', Router: '/zhoubian'}, {title: '衫果头条', Router: '/toutiao'}],
      headerRouter: ['header'],
      currentShow: false,
      currentRoute: ''
    }
  },
  computed: {
    RouterText () {
      const text = this.$route.path
      return text
    }
  },
  methods: {
    click (index) {
      this.currentRoute = this.headerTitle[index].Router
    },
    showInput () {
      this.currentShow = !this.currentShow
    },
    textValue () {
      console.log(this.$refs.mySelector.innerText)
    }
  }
}
</script>
<style>
  .header1{
    width: 100%;
    height: 80px;
    background: #292e41;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 999;
  }
  .header1-list-center-left{
    display: flex;
    flex-direction: row;
  }
  .header1-list{
    color: #7a80a2;
    height: 80px;
    /*margin:0px 15px;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header1-list p{
    padding: 0 15px;
  }
  .header1-list-center{
    width: 1200px;
    height: 80px;
    display: flex;
    min-width: 743px;
    justify-content: space-between;
  }
  .header-user{
    background: #3f4354;
    color: #ffffff;
  }
  .header-rigister{
    background: orangered;
    color: #ffffff;
  }
  .header1-list-center-user{
    display: flex;
    align-items: center;
  }
  .header1-list-center-user span{
    display: inline-block;
    padding: 10px;
    margin:0 10px;
  }
  .xiala{
    position: absolute;
    bottom: -50px;
    left: -10px;
    width: 50px;
    height: 30px;
    background: #000;

  }
  .header1-list-img{
    float: left;
    margin-top: 10px;
    display: block;
    width: 160px;
    height: 60px;
    background: url("https://static.sonkwo.com/assets/logo/logo_61_white-f49d19a3d44550593c2d3b8f2966879c8e1df3208cd76c79dcdafa11bf4a6610.png") no-repeat
  }
  .header1Active{
    background-color: #383d50;
  }
  .headerinput{
    height: 23px;
    font-size: 14px;
    border: none;
  }
  .input-div{
    display: inline-block;
    background: #fff;
    padding: 5px 10px;
  }
  .input-div-b{
    background: #fff;
    font-size: 14px;
    position: relative;
  }
  .input-enter-active, .input-leave-active {
    transition: all .6s ease;
  }
  .input-enter,.input-leave-to {
    transform: translate3d(250px, 0px, 0);
  }

</style>
