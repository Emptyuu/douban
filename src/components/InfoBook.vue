<template>
  <div id="infobook">
    <div class="left">
      <img :src="store.imgUrl" />
    </div>
    <div class="right">
      <div class="box">
        <p class="title">{{store.title}}</p>
        <span class="money">￥{{store.money}}</span>
      </div>
      <p class="info">{{store.info}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    store: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
#infobook {
  display: flex;
  .left {
    margin-right: 15px;
    img {
      width: 100px;
    }
  }
  .right {
    //   width: 100%;
    .box {
        overflow: hidden;
      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 180px;
        float: left;
      }
      .money {
        flex: 1;
        // width: 10%;
        float: right;
        color: #e76648;
        font-size: 16px;
        line-height: 22px;
      }
    }
    .info {
      margin-top: 20px;
      font-size: 13px;
      color: #999;
    }
  }
}
</style>