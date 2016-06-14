<template>
  <panel :header="node.name" :list="list" :type="type"></panel>
</template>

<script>
import {Panel} from 'vux-components'

export default {
  components: {
    Panel
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
      this.$resource('nodes{/id}').get({id: this.$get('id')}).then((response) => {
        this.$set('node', response.data.node)
      })
    },
    getTopics () {
      this.$resource('topics').query({node_id: this.$get('id')}).then((response) => {
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
