import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex);
export default new Vuex.Store({
  // 组件中通过this.$store.state.username调用
  state: {
    username: Cookie.get('username'),
    token: Cookie.get('token'),
    apiList: {
      auth:'http://127.0.0.1:8000/api/login/',
      course: 'http://127.0.0.1:8000/api/courses/',
      news: 'http://127.0.0.1:8000/api/articles/',

    }
  },
  mutations: {
    // 组件中通过 this.$store.commit(参数)调用

    saveToken: function (state, userToken) {
      state.username = userToken.username
      state.token = userToken.token
      Cookie.set('username', userToken.username, '20min')
      Cookie.set('token', userToken.token, '20min')

    },
    clearToken: function (state) {
      state.username = null
      state.token = null

      Cookie.remove('username')
      Cookie.remove('token')

    }
  }
})
