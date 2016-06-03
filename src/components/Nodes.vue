<template>
  <div class="nodes clearfix">
    <div class="item" v-for="node in nodes">
      <a href="" title="">{{node.name}}</a>
    </div>
  </div>
</template>

<script>
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
      this.$resource('nodes').query({}).then((response) => {
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
