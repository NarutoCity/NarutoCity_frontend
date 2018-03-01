<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li>
          <router-link :to="{name:'Index'}">首页</router-link>
          <router-link :to="{name:'Course'}">课程</router-link>
          <router-link :to="{name:'Micro'}">学位</router-link>
          <router-link :to="{name:'News'}">深科技</router-link>
        </li>

        </ul>
      <div>
          <div v-if="this.$store.state.username">
          <a>{{ this.$store.state.username }}</a>
          <a @click="logout">注销</a>
        </div>
          <router-link v-else to="/login">登录</router-link>
        </div>
    </div>

    <div>
      <router-view/>
    </div>

  </div>
</template>

<script>
  import Cookie from 'vue-cookies'
  export default {

    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      logout(){
        this.$store.state.username=''
        this.$store.state.token=''
        Cookie.remove('username')
        Cookie.remove('token')
      }
    }

  }
</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

</style>
