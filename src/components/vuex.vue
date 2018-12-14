<template>
    <div class="vuex">
        <p>this is a vuex</p>
        {{$store.state.count}}
        <button @click="increment">add</button>
        <button @click="decrement">jianshao</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>
