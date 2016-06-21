import Vue from 'vue'

export var Topic = Vue.resource(
  'topics{/id}'
)
