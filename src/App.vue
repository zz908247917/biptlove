<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 第一种写法 -->
    <!-- <Footer v-show="$route.path!=='/login' && $route.path!=='/register'"></Footer> -->
    <Footer v-show="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  mounted(){
    this.$store.dispatch("getCategoryList");
  }
}
</script>

<style lang="less" scoped>

</style>
