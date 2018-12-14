<template>
  <div>
    dddd{{$store.state.jine.jine}}
    <div @click="add(10)">加一个</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions('jine', ['add', 'reduce'])
}
</script>
