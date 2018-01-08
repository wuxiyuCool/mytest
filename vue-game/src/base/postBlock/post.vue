<template>
  <div>
    <div class="SK-community-post-block">
      <div class="avatar-wrapper">
        <a href="/personal/955280">
          <img src="https://www.sonkwo.com/avatar/default?imageView2/1/h/60/w/60">
        </a>
      </div>
      <div class="post-content">
        <div class="nickname">
          <a href="" class="name">sk_7df943f62828cd538428</a>
          <span class="rank level-5"></span>
          <span>发布了帖子</span>
          <button class="action">举报</button>
          <div class="date">
            2017-12-27 01:00:15
            <span>发布于
              <a href="/groups/534">杉果综合讨论组</a>
            </span>
          </div>
        </div>
        <div class="topic">
          <span class="title">关于杉果满123,免费送4款游戏的问题！！！</span>
        </div>
      </div>
      <div class="actions">
        <button class="like">
          <i class="fa fa-thumbs-up"></i>
          0
        </button>
        <button class="repost">
          <i class="fa fa-share"></i>
          <!-- react-text: 248 -->0<!-- /react-text -->
        </button>
        <button class="reply">
          <span>回复</span>
          0
        </button>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
.SK-community-post-block{
  padding: 20px 0;
  min-height: 60px;
  position: relative;
  border-bottom: 1px solid #3f4760;
  font-size: 12px;
}
  .avatar-wrapper{
    float: left;
    height: 60px;
    width: 60px;
    margin-left: 20px;
    -moz-border-radius: 30px 30px 30px 30px;
    -webkit-border-radius: 30px 30px 30px 30px;
    border-radius: 30px 30px 30px 30px;
    overflow: hidden;
  }
  .avatar-wrapper img {
    height: 60px;
    width: 60px;
  }
  .post-content{
    margin-left: 80px;
    padding: 0 20px;
  }
  .nickname a{
    font-size: 16px;
    font-weight: bold;
    color: #b9c0ef;
  }
  .nickname .rank+span{
    color: #b9c0ef;
    font-size: 16px;
    margin-left: 10px;
  }
.nickname .rank{
  display: inline-block;
  height: 20px;
  width: 25px;
  margin-bottom: -4px;
  background-size: 50px 400px;
}
.SK-community-post-block .post-content .nickname .level-5 {
  background: url(https://static.sonkwo.com/assets/rank-title-a8fdf0a14f6f44c29b4565a26d0f51886a01f0dd737ba33bf0d231f53d9250b3.png) no-repeat -13px -155px;
  background-size: 50px 400px;
}
.SK-community-post-block .post-content .nickname button {
  float: right;
  padding: 0;
  border: none;
  color: #7a80a2;
  background: none;
  display: none;
  outline: none;
}
.SK-community-post-block .post-content .date {
  padding: 16px 0;
  color: #7a80a2;
}
.SK-community-post-block .post-content .date a{
  font-size: 12px;
  color: dodgerblue;
}
.SK-community-post-block .post-content .topic {
  background: #3f4760;
  padding: 10px;
  height: 40px;
  overflow: hidden;
  margin-top: 30px;
  cursor: pointer;
}
.SK-community-post-block .post-content .topic .title {
  display: inline-block;
  vertical-align: top;
  line-height: 40px;
  margin-left: 15px;
  color: #b9c0ef;
  font-size: 14px;
}
.SK-community-post-block .actions {
  text-align: right;
  margin-top: 30px;
  padding: 0 20px;
}
.SK-community-post-block .actions button {
  border: none;
  background: none;
  color: #7a80a2;
  outline: none;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
}
.actions button i {
  margin-right: 4px;
}
</style>
