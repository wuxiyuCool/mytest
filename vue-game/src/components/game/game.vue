<template>
  <div class="body-game">
    <gameWarrper></gameWarrper>
    <gameSRev></gameSRev>
  </div>
</template>
<script>
  import gameWarrper from '@/base/game/game'
  import gameSRev from '@/base/gameStoreRec/gameStoreRec'
  export default {
    components: {
      gameWarrper,
      gameSRev
    }
  }
</script>
<style>
.body-game{
  padding: 80px 0 40px;
}
</style>
