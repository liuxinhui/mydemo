import Vue from 'vue'
import Vuex from 'vuex'
import money from './modules/a'
import count from './modules/b'
import zidingyi from './modules/c'
import jine from './modules/d'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    money,
    count,
    zidingyi,
    jine
  }
})
