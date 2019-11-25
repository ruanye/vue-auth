<template>
  <el-submenu
    v-if="menu.children && menu.children.length"
    :key="menu.name"
    :index="menu.path"
  >
    <template slot="title">
      {{ menu.meta.title }}
    </template>
    <template v-for="(item, index) in menu.children">
      <MenuItem :menu="item" :key="index"></MenuItem>
    </template>
  </el-submenu>
  <el-menu-item v-else :key="menu.name" :index="menu.path">
    {{ menu.meta.title }}
  </el-menu-item>
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
