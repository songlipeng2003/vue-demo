<template>
  <div class="topic">
    <h1>{{ topic.title }}</h1>
    <div>
      {{{ topic.body_html }}}
    </div>
  </div>
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
      id: this.$route.params.id,
      topic: [],
      replies: []
    }
  },
  created () {
    this.getTopic()
    this.getReplies()
  },
  methods: {
    getTopic () {
      Topic.get({id: this.$get('id')}).then((response) => {
        this.$set('topic', response.data.topic)
      })
    },
    getReplies () {
      this.$http.get('topics/' + this.$get('id') + '/replies').then((response) => {
        this.$set('replies', response.data.replies)
      })
    }
  }
}

</script>

<style>
</style>
