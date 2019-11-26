<template>
  <!-- 这里写递归组件 -->
  <div>
    <template>
      <!-- 如果有儿子 -->
      <el-submenu
        v-if="item.children && item.children.length"
        :index="item.path"
        :key="item.name"
      >
        <template slot="title">
          <router-link :to="{ path: item.path }">
            {{ item.meta.title }}
          </router-link>
        </template>
        <template v-for="(m, i) in item.children">
          <!-- 组件里面调用自身 -->
          <reSubMenu :item="m" :key="i"></reSubMenu>
        </template>
      </el-submenu>
      <!-- 如果没有儿子 -->
      <el-menu-item v-else :index="item.path">
        <router-link :to="{ path: item.path }">
          {{ item.meta.title }}
        </router-link>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'reSubMenu', // 组件是可以在它们自己的模板中调用自身的。不过它们只能通过 name 选项来做这件事：
  props: ['item'],
};
</script>

<style>
</style>
