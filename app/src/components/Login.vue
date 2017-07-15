<template>
  <div class="hello">
    <h1 class="titleBar">{{ mtitle }}</h1>
    <h2>用户登录</h2>
    <form>
    <span class='usericon'></span><input id="username" type="text" placeholder="用户名" maxlength="10" v-model="username">
    <span class='passwordicon'></span><input id="password" type="password" placeholder="密码" maxlength="10" v-model="password">
    <input type="submit" value="登录">
    </form>
    <button>注册</button>
    <!-- <p>debug msg :</p>
    <p>{{ username }}</p>
    <p>{{ password }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      mtitle: '登录',
      username: '',
      password: ''
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
  color: grey;
  margin-top: 5vh;
  font-size: 55px;
  font-weight: small;
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
#username{
  text-indent: 2vw;
  font-size: 50px;
  margin-top: 5vh;
  width: 60vw;
  height: 8vh;
  /* background-color: red; */
  border: 1px solid grey;
  border-radius: 15px;
}
span.usericon{
  vertical-align: bottom;
  display: inline-block;
  font-size: 50px;
  background-image: url('~/static/icon.png');
  background-size: 120%;
  background-position: -1vw -1vh;
  width: 15vw;
  height: 8vh;
  margin-right: 5vw;
  /* border: 1px solid red; */
}
span.passwordicon{
  vertical-align: bottom;
  display: inline-block;
  font-size: 50px;
  background-image: url('~/static/icon.png');
  background-size: 120%;
  background-position: -1vw -18vh;
  width: 15vw;
  height: 8vh;
  margin-right: 5vw;
  /* border: 1px solid red; */
}
#password{
  text-indent: 2vw;
  font-size: 50px;
  margin-top: 5vh;
  width: 60vw;
  height: 8vh;
  /* background-color: red; */
  border: 1px solid grey;
  border-radius: 15px;
}

input:not([type=submit]):focus{
  box-shadow: inset 0 0 1em gold;

  /* background-color: goldenrod; */
}
input[type="submit"]{
  color: white;
  border-radius: 15px;
  margin-top: 5vh;
  font-size: 50px;
  clear: both;
  width: 60vw;
  height: 8vh;
  background-color: rgb(136, 155, 173);
}
button{
   color: white;
  border-radius: 15px;
  margin-top: 3vh;
  font-size: 50px;
  clear: both;
  width: 60vw;
  height: 8vh;
  background-color: rgb(136, 155, 173);
}
p{
  font-size: 50px;
}
</style>
