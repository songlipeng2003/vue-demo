<template>
  <div id="app">

    <tabbar>
      <tabbar-item>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">论坛</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">首页</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vux-components/tabbar'

export default {
  components: {
    Tabbar, TabbarItem
  }
}
</script>

<style>
p {
  font-size: 20px;
}
</style>
