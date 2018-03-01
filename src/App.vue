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

      <ul>
        <li>
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
  export default {
    name: 'app'
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
