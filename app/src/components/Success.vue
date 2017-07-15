<template>
  <div class="hello">
    <h1 class="titleBar">登录成功</h1>
    <h2>登录成功</h2>
    <h2 style="margin-top:12vh">欢迎「 {{ loginuser[0].username }}」登录</h2>
    <h2>你的邮箱是:「 {{ loginuser[0].email }} 」</h2>
       <!-- <h2>{{ loginuser }}</h2>    -->
    <!-- <button>注册</button> --> 
  </div>
</template>

<script>
import store from '../store'
// import { mapGetters } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mtitle: 'Login'
      // username: store.state
    }
  },
  computed: {
    loginuser () {
      // return this.$store.state.todos.filter(todo => todo.done).length
      return store.state.userlist.filter(user => user.login)
    }
  }
}
// console.log(store.getters.isLogin)
</script>

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
