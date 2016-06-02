<template>
  <div>
    <router-view></router-view>
    <tabbar>
      <tabbar-item v-link="home">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">论坛</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">个人</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vux-components/tabbar'
import {Style} from 'vux-components'

export default {
  components: {
    Style, Tabbar, TabbarItem
  }
}
</script>

<style>
</style>
