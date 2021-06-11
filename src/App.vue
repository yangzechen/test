<template>
  <div id="app">
    <div id="nav">
      <!-- router-link 及其它属性 -->
      <!-- <router-link to="/home" tag="button" replace>Home</router-link> |
      <router-link to="/about" replace active-class="active">About</router-link> -->
      <!-- 通过代码跳转路由 -->
      <button type="" @click="homeclick">首页</button>
      <button type="" @click="aboutclick">关于</button>
      <router-link :to="'/user/' + userid">用户</router-link>
      <!-- 当成对象传递 v-bind  query查询-->
      <router-link :to="{ path: '/profile', query: { name: '泽辰', age: 18 } }"
        >档案</router-link
      >
      <button type="" @click="profileclick">档案</button>
    </div>
    <!-- 决定渲染组件放的位置 -->
    <keep-alive exclude="profile">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      userid: "zhangsan",
      message: "sadfsfd",
    };
  },
  methods: {
    homeclick() {
      //通过代码方式修改路径
      this.$router.push("/home");
    },
    aboutclick() {
      /*  this.$router.push("/about"); */
      this.$router.replace("/about");
    },
    profileclick() {
      this.$router.push({ path: "/profile", query: { name: "泽辰", age: 18 } });
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.router-link-active {
  color: #42b983;
}
</style>
