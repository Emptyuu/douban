<template>
  <div id="home">
    <Header class="header"></Header>
    <AppDown></AppDown>
    <BookList title="最受关注图书 | 虚构类" to="/home/red" :list="fiction"></BookList>
    <BookList title="最受关注图书 | 非虚构类" to="/home/red" :list="nofiction"></BookList>
  </div>
</template>

<script>
import Header from "@/components/Header";
import AppDown from "@/components/AppDown";
import BookList from "@/components/BookList";
import { getFictionBook, getNofictionBook } from "@/api";
export default {
  components: {
    Header,
    AppDown,
    BookList
  },
  data() {
    return {
      fiction: [],
      nofiction: []
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
          // link: "/" + item.id
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
          // link: "/" + item.id
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
    position: sticky;
  }
}
</style>