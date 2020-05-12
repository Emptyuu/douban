<template>
  <div id="bookList">
    <div class="tit">
      <h3>{{title}}</h3>
      <router-link tag="span" :to="this.to">更多</router-link>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in list" :key="item.id" class="swiper-slide">
          <img :src="item.imgUrl" width="100px" />
          <p>{{item.title}}</p>
          <div class="rating">
            <van-rate :value="item.rating/2" size="10" gutter="1" />
            {{item.rating.toFixed(1)}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  props: {
    to: {
      type: String
    },
    title: {
      type: String
    },
    list: {
      type: Array
    }
  },
  watch: {
    list: {
      handler() {
        if (this.list) {
          this.$nextTick(() => {
            new Swiper(".swiper-container", {
              freeMode: true,
              slidesPerView: 3,
              spaceBetween: 0
            });
          });
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      value: 3
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
#bookList {
  padding: 0 15px;
  .tit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    span {
      color: #42bd56;
    }
  }
}
.swiper-wrapper {
  text-align: center;
  img {
    width: 100px;
    height: 140px;
    border-radius: 3px;
  }
  p {
    margin: 5px 0;
    white-space: nowrap; /*超出的空白区域不换行*/
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis; /*文本超出显示省略号*/
  }
}
.rating {
  font-size: 10px;
  color: #999;
}
</style>

// 组件使用说明：
// 传递参数要求：点击后跳转的链接：goLink  String
//             图片的地址：imgUrl          String
//             书名：bookName          String
//             评分：userStar          Number
//             传递一个数组包对象