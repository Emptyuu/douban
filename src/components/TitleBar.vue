<template>
  <div class="tit">
    <h3>{{title}}</h3>
    <router-link v-if="to" tag="span" :to="to">更多</router-link>
  </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String
        },
        to:{
            type:String
        }
    }
};
</script>

<style lang="scss" scoped>
.tit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    span {
      color: #42bd56;
    }
  }
</style>