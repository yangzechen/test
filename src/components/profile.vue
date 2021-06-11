<template>
  <div>
    <h2>我是profile组件</h2>
    <h2>{{ $route.query }}</h2>
    <h2>{{ $route.query.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "profile",
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
</style>