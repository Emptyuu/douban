<template>
  <div id="appDown">
    <div class="left">
      <img
        src="https://img3.doubanio.com/f/frodo/144e6fb7d96701944e7dbb1a9bad51bdb1debe29/pics/app/logo.png"
        alt
      />
      <div class="tit">
        <h4>豆瓣App</h4>
        <p>记录你的书影音生活</p>
      </div>
    </div>
    <div class="right">
      <span>打开App</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#appDown {
  display: flex;
  align-items: center;
  justify-content:space-between;
  background: #f7f7f7;
  height: 60px;
  padding: 0 20px;
  .left {
    display: flex;
    img {
      width: 40px;
    }
    .tit{
      margin-left: 10px;
      h4{
        font: 16px/20px "";
      }
      p{
        font: 12px/18px "";
        color: #999;
      }
    }
  }
  .right{
    width: 80px;
  height: 30px;
  border-radius: 15px;
  color: #FFF;
  background: #42BD56;
  text-align: center;
  font: 13px/30px "";
  }
}
</style>