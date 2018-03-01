<template>
  <div id="login">
    <label for="">用户名：</label>
      <input type="text" placeholder="请输入用户名" v-model="username">
    <label for="">密码：</label>
      <input type="password" placeholder="请输入密码" v-model="password">
    <a class="btn" @click="doLogin">提交</a>
    <p style="color: red;">{{ error }}</p>

  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
        error: '',
      }
    },
    methods:{
      doLogin(){
        console.log(this);
        var that = this;
        this.$axios.request({
          url: 'http://127.0.0.1:8000/api/login/',
          method: 'POST',
          data: {
            username: this.username,
            password: this.password
          },
          responseType: 'json'
        }).then(function (response) {
         if (response.data.status=='1000'){
            that.$store.commit('saveToken',response.data)
            that.$router.push('/index')
          }else {
            that.error=response.data.msg}
        })
      }
    }
  }
</script>
