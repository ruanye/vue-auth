<template>
  <div>
    <el-menu :router="true">
      <template v-for="(menu, index) in menuList">
        <!-- <el-submenu
          v-if="menu.children && menu.children.length"
          :key="menu.name"
          :index="menu.name"
        >
          <template slot="title">{{ menu.meta.title }}</template>
        </el-submenu>
        <el-menu-item v-else :key="menu.name" :index="menu.name">{{
          menu.meta.title
        }}</el-menu-item> -->
        <MenyItem :menu="menu" :key="index"></MenyItem>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// eslint-disable-next-line import/extensions
import MenyItem from './MenuItem';

export default {
  components: {
    MenyItem,
  },
  computed: {
    ...mapState('route', ['menuList']),
  },
};
</script>

<style>
</style>
