<template>
  <panel header="最新帖子" :list="list" :type="type"></panel>
</template>

<script>
import {Panel} from 'vux-components'
import Topic from '../resources/Topic'

export default {
  components: {
    Panel
  },
  data () {
    return {
      type: '1',
      topics: [],
      list: []
    }
  },
  created () {
    this.getTopics()
  },
  methods: {
    getTopics () {
      Topic.query({}).then((response) => {
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
