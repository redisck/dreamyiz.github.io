<template>
  <div class="hello">
    <h1 class="titleBar">登录成功</h1>
    <h2>登录成功</h2>
    <h2 style="margin-top:12vh">欢迎「用户名」登录</h2>
    <h2>你的邮箱是「」</h2>
    <!-- <form>
    <span class='usericon'></span><input id="username" type="text" placeholder="用户名" maxlength="10">
    <span class='passwordicon'></span><input id="password" type="password" placeholder="密码" maxlength="10">
    <input type="submit" value="登录">
    </form>
    <button>注册</button> -->
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mtitle: 'Login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1.titleBar{
  background-color: rgb(102, 124, 144);
  line-height: 8vh;
  height: 8vh;
  color: white;
  font-size: 60px;
  /* letter-spacing: 5px; */
}
h2 {
  color: black;
  margin-top: 5vh;
  font-size: 55px;
  font-weight: small;
}

</style>
