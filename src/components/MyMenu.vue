<template>
  <div>
    <el-menu :router="true">
      <template v-for="(menu, index) in menuList">
        <SubMenu :item="menu" :key="index"></SubMenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// eslint-disable-next-line import/extensions
import SubMenu from './reSubMenu';

export default {
  components: {
    SubMenu,
  },
  computed: {
    ...mapState('route', ['menuList']),
  },
};
</script>

<style>
</style>
