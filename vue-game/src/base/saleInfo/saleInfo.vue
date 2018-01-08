<template>
  <div>
    <div class="game-sale-rank" v-show="rank>0" v-bind:style="rankColor">{{rankNumber}}</div>
  <div class="game-sale-info">
    <span class="game-sale-info-sp">-30%</span>
  </div>
  <div class="game-price-info">
    <p><del>￥199.00</del>&nbsp;<span>￥139.00</span></p>
  </div>
  </div>
</template>
<script>
  export default {
    props: {
      rank: {
        type: Number,
        default: 0
      }
    },
    computed: {
      rankNumber () {
        const rank = this.rank
        return rank === 1 ? `1st` : rank === 2 ? `2nd` : rank === 3 ? `3st` : `${rank}th`
      },
      rankColor () {
        const rank = this.rank
        return rank === 1 ? `background:#EC6746` : rank === 2 ? `background:#FB9114` : rank === 3 ? `background:#3A68B8` : `background:#5C5C5C`
      }
    }
  }
</script>
<style>
  .game-sale-info{
    position: absolute;
    bottom:40px;
    right: 10px;
  }
  .game-price-info{
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
  .game-sale-rank{
    position: absolute;
    left: 5px;
    top: 5px;
    font-size: 16px;
    padding: 15px 10px;
    color: white;
    font-weight: 700;
    border-radius: 5px;
  }
  .game-sale-info-sp{
    background: orangered;
    padding: 5px;
    color: white;
    border-radius: 3px;
  }
  .game-price-info p{
    background: #5c5c5c;
    padding: 6px;
    border-radius: 3px;
  }
  .game-price-info p del{
    color: #fff;
  }
  .game-price-info p span{
    color: #fb9114;
  }
</style>
