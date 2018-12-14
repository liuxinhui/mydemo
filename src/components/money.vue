<template>
  <div>
    <p>money{{$store.state.money.money}}</p>
    <button @click="add">add</button>
    <button @click="reduce">reduce</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions('money', ['add', 'reduce'])
}
</script>
