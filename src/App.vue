<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li>
      <router-link to="/index">首页</router-link>
      <router-link to="/courses">课程</router-link>
      <router-link to="/micro">学位</router-link>
      <router-link to="/news">深科技</router-link>
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
    <div><router-view/></div>
    <!--<h1>{{msg}}</h1>-->
    <!--<input type="button" value="点击翻转" @click="change">-->
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

</style>
