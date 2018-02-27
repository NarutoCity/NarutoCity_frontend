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
      <ul>
        <li>
          <router-link to="/login">登录</router-link>
        </li>
      </ul>
    </div>
    <div><router-view/></div>
    <!--<h1>{{msg}}</h1>-->
    <!--<input type="button" value="点击翻转" @click="change">-->
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      change(){
        let str=this.msg;
        str = str.split('').reverse().join();
        this.msg=str
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
