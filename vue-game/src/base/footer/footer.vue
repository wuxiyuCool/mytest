<template>
  <footer class="footer">
    <div class="footer-nav">
      <p class="footer-nav-p">
        <a href="">关于中电博亚</a>
        <span>|</span>
        <a href="">衫果开发者平台</a>
        <span>|</span>
        <a href="">"跃"计划</a>
        <span>|</span>
        <a href="">衫果品台协议</a>
        <span>|</span>
        <a href="">联系方式</a>
        <span>|</span>
        <a href="">工作机会</a>
        <span>|</span>
        <a href="">客户服务</a>
        <span>|</span>
        <a href="">家长监护</a>
      </p>
      <div class="information">
        <div class="footer-nav-left">
          <p>©2017 北京中电博亚科技有限公司版权所有 所有商标版权属于其拥有者Tel:010-68434500 <span>&nbsp;</span> <a href="">经营执照</a> </p>
          <p><span class="SK-gsh-placeholder"></span><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020140">京公网安备11010802020140号</a><span>&nbsp;</span><a target="_blank" href="http://7vihbu.com1.z0.glb.clouddn.com/Fjw3QUnohizXtTUBLm9McCTnhQ87">新出发京批字第直0816号</a><span>&nbsp;</span><a target="_blank" href="http://www.bca.gov.cn/default/index.jsp">京ICP证140082号</a><span>&nbsp;</span><span>京ICP备12041226号</span><span>&nbsp;</span><span>京网文[2016]5770-752号</span></p>
          <p><span>健康游戏忠告:抵制不良游戏 拒绝盗版游戏 注意自保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</span></p>
        </div>
        <div class="footer-nav-right">

          <span @mouseenter="showEWM" @mouseleave="showEWM" class="icon-font weixin"><div v-show="show" class="erweima"></div></span>
          <a class="icon-font weibo" href=""></a>
          <a class="icon-font zhihu" href=""></a>
          <a class="icon-font bilibili" href=""></a>
          <a class="icon-font yunyinyue" href=""></a>
          <a class="icon-font douyu" href=""></a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        show: false
      }
    },
    methods: {
      showEWM () {
        this.show = !this.show
      }
    }
  }
</script>
<style>
  .footer {
    width: 100%;
    min-width: 1200px;
    background: #292e41;
  }
  .footer-nav{
    width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
  }
  .footer-nav-p a{
    color: #7A80A2;
    font-size: 14px;
  }
  .footer-nav-p a:hover{
    color: #b9c0ef;
  }
  .footer-nav-p span{
    color: #7A80A2;
    margin: 0 2px;
    font-weight: 700;
  }
  .information{
    margin: 20px 0;
    color: #acb2cc;
    line-height: 26px;
    display: flex;
    justify-content: space-between;
  }
  .footer-nav-right{
    width: 370px;
    height: 78px;
    position: relative;
  }
  .footer-nav-left a{
    color: #acb2cc;
  }
  .footer-nav-left{
    width: 663px;
    height: 78px;
    font-size: 12px;
  }
  .icon-font{
    float: left;
    height: 36px;
    width: 36px;
    position: relative;
    margin-left: 10px;
  }
  .weixin{
    background: url("https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png") no-repeat 0 0;
  }
  .weixin:hover{
    background: url("https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png") no-repeat -71px 0px;
  }
  .erweima{
    width: 110px;
    height: 118px;
    position: absolute;
    background: url(https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png) no-repeat 0 -285px;
    top: -118px;
    left: -36px;
    display: block;
  }
  .weibo{
    background: url(https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png) no-repeat 0 -46px;
  }
  .weibo:hover{
    background: url(https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png) no-repeat -71px -46px;
  }
  .zhihu{
    background: url(https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png) no-repeat 0 -92px;
  }
  .zhihu:hover{
    background: url(https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png) no-repeat -71px -92px;
  }
  .bilibili{
    background: url(https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png) no-repeat 0 -138px;
  }
  .bilibili:hover{
    background: url(https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png) no-repeat -71px -138px;
  }
  .yunyinyue{
    background: url(https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png) no-repeat 0 -184px;
  }
  .yunyinyue:hover{
    background: url(https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png) no-repeat -71px -184px;
  }
  .douyu{
    background: url(https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png) no-repeat 0 -230px;
  }
  .douyu:hover{
    background: url(https://static.sonkwo.com/assets/yd-081cb34293358339b8b1134883f8d0ee5ca1b99779852cb4968cc327397a2654.png) no-repeat -71px -230px;
  }
</style>
