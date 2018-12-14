<template>
  <div id="app">
    <router-view/>
    <list :age='age' @kk="ll">
      <p slot='a'>我要显示一点东西1</p>
      <p slot='b'>我要显示一点东西2</p>
    </list>
    子组件向父组件传递的值{{jj}}
    <pagea></pagea>
    <pageb></pageb>
    <pagec></pagec>
    <paged></paged>
  </div>
</template>

<script>
import List from './components/list'
import pagea from './components/money'
import pageb from './components/count'
import pagec from './components/zdy'
import paged from './components/jine'

export default {
  name: 'App',
  data () {
    return {
      age: '90',
      jj: ''
    }
  },
  components: {
    List,
    pagea,
    pageb,
    pagec,
    paged
  },
  methods: {
    addList: function () {
      alert('1')
    },
    ll: function (num) {
      console.log(num)
      this.jj = num
    }
  }
}
</script>
