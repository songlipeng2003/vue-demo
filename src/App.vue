<template>
  <div>
    <router-view></router-view>
    <tabbar>
      <tabbar-item @click="goHome()">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item @click="goNodes()">
        <span slot="label">论坛</span>
      </tabbar-item>
      <tabbar-item @click="goAccount()">
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
  },
  methods: {
    goHome () {
      this.$router.go('home')
    },
    goNodes () {
      this.$router.go('nodes')
    },
    goAccount () {

    }
  }
}
</script>

<style>
</style>
