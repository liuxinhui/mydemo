<template>
  <div>
    cyemian
    {{$store.state.zidingyi.num}}
    <button @click="add(2)">jia</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions('zidingyi', ['add', 'reduce'])
}
</script>
