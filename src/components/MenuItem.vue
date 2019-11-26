<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-submenu
        v-if="menu.children && menu.children.length"
        :key="menu.name"
        :index="menu.path"
      >
        <template slot="title">
          <router-link :to="{ path: menu.path }">
            {{ menu.meta.title }}
          </router-link>
        </template>
        <template v-for="(item, index) in menu.children">
          <MenuItem :menu="item" :key="index"></MenuItem>
        </template>
      </el-submenu>
      <el-menu-item v-else :key="menu.name" :index="menu.path">
        {{ menu.meta.title }}
      </el-menu-item>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menu: {
      type: Object,
    },
  },
};
</script>
<style  scoped>
.sidenav {
}
</style>
