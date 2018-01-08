<template>
  <div class="body">
    <div class="SK-community-home-container">
      <div class="SK-community-middle">
        <div class="SK-tabs-container">
          <div class="SK-tabs-buttons">
            <div class="tabs-button active">
              <a href="/home?type=talk">果圈</a>
            </div>
            <div class="tabs-button">
              <a href="/home?type=subject">果贴</a>
            </div>
          </div>
          <div class="SK-tabs-content">
            <div class="SK-tabs-item-container">
              <div class="SK-community-home-content">
                <div class="SK-theme-block-container">
                  <div class="SK-theme-block-types">
                    <span class="type active">热门动态</span>
                  </div>
                  <div class="SK-theme-block-content">
                    <div class="SK-talks-list-container">
                      <Post></Post>
                      <Post></Post>
                      <Post></Post>
                      <Post></Post>
                      <Post></Post>
                      <Post></Post>
                      <Post></Post>
                      <div class="talk-list-bottom">已到达底部</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=""></div>
      </div>
      <div class="SK-advice-block">
        <span>意见反馈</span>
      </div>
      <div class="SK-community-right">
        <div class="SK-community-user-card">
          <div class="SK-user-qr-block">
            <div class="SK-QR-img-wrapper"></div>
            <div class="SK-QR-detail-wrapper">
              <h3>杉果游戏官方微信</h3>
              <p>欢迎关注我们</p>
              <div class="icons-list">
                <a class="icon-font weibo" href=""></a>
                <a class="icon-font zhihu" href=""></a>
                <a class="icon-font bilibili" href=""></a>
                <a class="icon-font douyu" href=""></a>
              </div>
            </div>
          </div>
        </div>
       <Tui></Tui>
      </div>
    </div>
  </div>
</template>
<script>
  import Post from '@/base/postBlock/post'
  import Tui from '@/base/tuijian/tuijian'
  export default {
    components: {
      Post,
      Tui
    }
  }
</script>
<style>
  .talk-list-bottom{
    text-align: center;
    font-size: 14px;
    color: #7a80a2;
    padding: 30px 0;
  }
  .SK-recommend-container .content .SK-hot-post-card a {
    padding: 10px;
    display: block;
    color: #b9c0ef;
  }
  .SK-recommend-container .content .SK-hot-post-card img {
    float: left;
    height: 80px;
    width: 135px;
  }
  .SK-recommend-container .content .SK-hot-post-card {
    padding: 20px 0;
    display: flex;
  }
  .SK-recommend-container .title {
    font-size: 18px;
    color: #b9c0ef;
    line-height: 60px;
    border-bottom: 1px solid #b9c0ef;
  }
  .SK-recommend-container{
    background: #33394d;
    padding: 0 20px;
    overflow: hidden;
  }
  .SK-community-home-container .SK-community-right .SK-recommend-container {
    margin-top: 20px;
    margin-left: 20px;
  }
  .SK-QR-detail-wrapper{
    margin-left: 126px;
    color: #7a80a2;
  }
  .SK-community-user-card .SK-user-qr-block .SK-QR-detail-wrapper .icons-list {
    margin-top: 26px;
  }
  .SK-community-user-card .SK-user-qr-block .SK-QR-detail-wrapper h3 {
    font-size: 18px;
    color: #b9c0ef;
    font-weight: 900;
  }
  .SK-community-user-card .SK-user-qr-block .SK-QR-detail-wrapper p{
    font-size: 14px;
    padding-top: 5px;
  }
  .SK-community-user-card .SK-user-qr-block .SK-QR-img-wrapper {
    height: 116px;
    width: 116px;
    float: left;
    background: url(https://static.sonkwo.com/assets/weixin-a9a6602a7e7d295b25a628212da1325b73e4268caf163ff0712e012412990e1d.png);
  }
  .SK-community-user-card .SK-user-qr-block {
    padding: 20px 0;
  }
  .SK-community-user-card {
    padding: 0 20px;
    background: #33394d;
    overflow: hidden;
    margin-left: 20px;
    height: 150px;
  }
  .SK-advice-block{
    height: 50px;
    width: 50px;
    font-size: 14px;
    box-sizing: border-box;
    padding: 10px;
    background: #33394d;
    color: #b9c0ef;
    position: fixed;
    bottom: 100px;
    right: 10px;
    cursor: pointer;
    line-height: 15px;
    z-index: 9999;
  }
  .body{
    background: #202539;
  }
  .SK-community-home-container{
    padding: 150px 0 40px;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    min-height: 100vh;
    display: flex;
  }
  .SK-community-middle{
    width: 830px;
  }
  .SK-tabs-container{

  }
  .SK-community-middle .tabs-button{
    height: 56px;
    line-height: 56px;
    border-width: 0 0 4px 0;
    padding: 0 75px;
    border-style: solid;
    font-size: 16px;
    border-color: transparent;
  }
  .SK-community-middle .SK-tabs-buttons .active{
    border-color: #ff6900;
    background: #33394d;
  }
  .SK-community-middle .SK-tabs-buttons .active a{
    color: #ff6900;
  }
  .SK-community-middle .tabs-button a{
    color: #7a80a2;
    font-size: 18px;
  }
  .SK-community-middle .SK-tabs-buttons{
    background: #33394d;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 2px solid #7a80a2;
    display: flex;
  }
  .SK-community-middle .SK-tabs-content{
    margin-top: 0;
    background: #33394d;
  }
  .SK-tabs-item-container{
    padding: 0 20px;
  }
  .SK-community-home-content{

  }
  .SK-theme-block-container{

  }
  .SK-theme-block-types{
    padding: 20px 0;
  }
  .SK-theme-block-types span{
    cursor: pointer;
    font-size: 14px;
    padding-right: 6px;
    color: #eb6100;
    /*color: #7a80a2;*/
  }
  .SK-community-right{

  }
</style>
