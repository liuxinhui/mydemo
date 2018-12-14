<template>
  <div>
    <p>money{{$store.state.count.count}}</p>
    <button @click="add">add</button>
    <button @click="reduce">reduce</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions('count', ['add', 'reduce'])
}
</script>
