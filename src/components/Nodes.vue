<template>
  <div class="nodes clearfix">
    <div class="item" v-for="node in nodes">
      <a v-link="{name: 'node', params: {id: node.id}}" title="">{{node.name}}</a>
    </div>
  </div>
</template>

<script>
import Node from '../resources/Node'

export default {
  components: {
  },
  data () {
    return {
      type: '1',
      nodes: []
    }
  },
  created () {
    this.getTopics()
  },
  methods: {
    getTopics () {
      Node.query({}).then((response) => {
        this.$set('nodes', response.data.nodes)
      })
    }
  }
}

</script>

<style>
.nodes {

}

.nodes .item {
  float: left;
  width: 25%;
  padding: 8 5px;
  text-align: center;
  margin: 10px 0;
}
</style>
