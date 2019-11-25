<template>
  <div>
    <el-menu>
      <template v-for="menu in menuList">
        <el-menu-item
          v-if="menu.children"
          :key="menu.name"
          :index="menu.name"
          >{{ menu.name }}</el-menu-item
        >
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('route', ['menuList']),
  },
};
</script>

<style>
</style>
