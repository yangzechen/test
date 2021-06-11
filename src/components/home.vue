<template>
  <div>
    <div class="header">我是首页</div>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/mess">会谈</router-link>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "ni",
      path: "/home/news",
    };
  },
  //界面进入活跃状态 与keep-alive挂钩
  activated() {
    this.$router.push(this.path);
  },
  //界面进入不活跃状态
  deactivated() {},
  //记录状态
  beforeRouteLeave(to, from, next) {
    // ...
    this.path = this.$route.path;
    next();
  },
  //生命周期函数
  //创建 挂载 修改(界面更新) 销毁
  created() {
    console.log("create");
    document.title = "首页";
    //设置路径
    /* this.$router.push("/home/news"); */
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("update首页");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
.header {
  font-size: 50px;
  color: burlywood;
}
</style>