<template>
  <div>
    <slot name='a'></slot>
    <p v-show="isShow">{{name}}</p>
    <div>{{num}}</div>
    <div @click="handleClickItem">1313</div>
    {{age}}
    <slot name='b'></slot>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: ['age'],
  data () {
    return {
      name: '<p>000</p>',
      isShow: true,
      num: 5
    }
  },
  methods: {
    handleClickItem: function () {
      this.isShow = !this.isShow
      this.num = this.num + 1
      this.$emit('kk', this.num)
    }
  }
}
</script>
