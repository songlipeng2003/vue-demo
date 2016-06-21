<template>
  <scroller lock-x scrollbar-y use-pulldown :pulldown-config="{content:'下拉刷新', downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}" @pulldown:loading="getTopics">
    <panel :header="node.name" :list="list" :type="type"></panel>
  </scroller>
</template>

<script>
import {Panel, Scroller} from 'vux-components'
import Node from '../resources/Node'
import Topic from '../resources/Topic'

export default {
  components: {
    Panel, Scroller
  },
  data () {
    return {
      id: this.$route.params.id,
      type: '1',
      node: [],
      topics: [],
      list: []
    }
  },
  created () {
    this.getNode()
    this.getTopics()
  },
  methods: {
    getNode () {
      Node.get({id: this.$get('id')}).then((response) => {
        this.$set('node', response.data.node)
      })
    },
    getTopics () {
      Topic.query({node_id: this.$get('id')}).then((response) => {
        this.$set('topics', response.data.topics)
        let list = []
        response.data.topics.forEach((e, i) => {
          list.push({
            src: e.user.avatar_url,
            title: e.title,
            desc: e.node_name + '•' + e.user.name + '•',
            url: {name: 'topic', params: {id: e.id}}
          })
        })

        this.$set('list', list)
      })
    }
  }
}

</script>

<style>
</style>
