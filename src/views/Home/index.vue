<template>
  <div id="home">
    <Header class="header"></Header>
    <AppDown></AppDown>
    <TitleBar class="titlebar" title="最受关注图书 | 虚构类" to="/home/red"></TitleBar>
    <BookList class="bookList" :list="fiction" :type="1"></BookList>
    <TitleBar class="titlebar" title="最受关注图书 | 非虚构类" to="/home/red"></TitleBar>
    <BookList class="bookList" :list="nofiction" :type="1"></BookList>
    <TitleBar class="titlebar" title="豆瓣书店" to="/home/store"></TitleBar>
    <InfoBook class="bookList" :store="store"></InfoBook>
    <BookList class="bookList" :list="storeBook" :type="2"></BookList>
  </div>
</template>

<script>
import Header from "@/components/Header";
import AppDown from "@/components/AppDown";
import BookList from "@/components/BookList";
import TitleBar from "@/components/TitleBar";
import InfoBook from "@/components/InfoBook";
import { getFictionBook, getNofictionBook, getInfoBook } from "@/api";
export default {
  components: {
    Header,
    AppDown,
    BookList,
    TitleBar,
    InfoBook
  },
  data() {
    return {
      fiction: [],
      nofiction: [],
      store: {},
      storeBook: []
    };
  },
  mounted() {
    getFictionBook().then(res => {
      this.fiction = res.subject_collection_items.map(item => {
        return {
          id: item.id,
          imgUrl: item.cover.url,
          rating: item.rating.value,
          title: item.title
        };
      });
    });
    getNofictionBook().then(res => {
      this.nofiction = res.subject_collection_items.map(item => {
        return {
          id: item.id,
          imgUrl: item.cover.url,
          rating: item.rating.value,
          title: item.title
        };
      });
    });
    getInfoBook().then(res => {
      console.log(res);
      this.store = {
        imgUrl: res.header.cover.url,
        title: res.header.title,
        info: res.header.info,
        money: res.header.price
      };
      this.storeBook = res.subject_collection_items.map(item => {
        return {
          id: res.id,
          imgUrl: item.cover.url,
          money: item.price,
          title: item.title
        };
      });
    });
  }
};
</script>

<style scoped lang="scss">
#home {
  width: 100%;
  position: relative;
  .header {
  }
  .titlebar {
    padding: 0 15px;
  }
  .bookList {
    padding: 0 15px;
  }
}
</style>