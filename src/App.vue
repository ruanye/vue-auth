<template>
  <div id="app">
    <div>
      <my-menu></my-menu>
    </div>
    <router-view />
  </div>
</template>
<script>
import MyMenu from './components/MyMenu.vue';

export default {
  components: {
    MyMenu,
  },
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
