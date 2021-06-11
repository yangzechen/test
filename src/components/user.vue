<template>
  <div id="user">
    <h2>我是用户界面</h2>
    <h2>{{ userId }}</h2>
    <!-- 获取路由数据 -->
    <h2>{{ $route.params.userid }}</h2>
    <h3>{{ userid }}</h3>
    <button @click="btnclick">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid: "lisi",
    };
  },
  computed: {
    userId() {
      //当前哪一个路由处于活跃状态 拿到的就是哪一个路由
      return this.$route.params.userid;
    },
  },
  methods: {
    btnclick() {
      console.log(this.$router);
      console.log(this.$route);
    },
  },
  created() {
    console.log("create用户");
    document.title = "用户";
  },
};
</script>

<style>
</style>