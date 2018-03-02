<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li>
          <router-link :to="{name:'Index'}">首页</router-link>
        </li>
        <li>
          <router-link :to="{name:'Course'}">课程</router-link>
        </li>
        <li>
          <router-link :to="{name:'News'}">深科技</router-link>
        </li>
      </ul>

      <ul>
        <li v-if="this.$store.state.username">
          <a>{{ this.$store.state.username }}</a>
          <a @click="logout">注销</a>
        </li>
        <li v-else>
          <router-link :to="{name:'Login'}">登录</router-link>
        </li>
      </ul>
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
    methods: {
      logout() {
        this.$store.state.username = ''
        this.$store.state.token = ''
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

  .nav {
    height: 80px;
    background-color: aliceblue;
  }

  a {
    color: #42b983;
  }

</style>
