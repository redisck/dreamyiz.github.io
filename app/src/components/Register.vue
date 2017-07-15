<template>
  <div class="hello">
    <h1 class="titleBar">注册</h1>
    <h2>用户注册</h2>
    <form>
    <span class='usericon'></span><input id="username" name="username" type="text" placeholder="用户名" maxlength="20" v-model="username">
    <span class='usericon'></span><input id="useremail" type="email" name="email" placeholder="邮箱" maxlength="30" v-model="useremail">
    <span class='passwordicon'></span><input class="password" type="text" placeholder="密码" maxlength="20" v-model="passwordfirst">
    <span class='passwordicon'></span><input id="password" class="password" type="text" placeholder="确认密码" maxlength="20" v-model="passwordsecond">
     <input type="submit" value="注册">
    </form>
    <!-- <button>注册</button> -->
    <p>{{ passwordsame }}</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mtitle: 'Login',
      username: '',
      useremail: '',
      passwordfirst: '',
      passwordsecond: ''
    }
  },
  computed: {
    passwordsame: function () {
      return (this.passwordfirst === this.passwordsecond) ? '' : '请输入两次相同的密码'
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
#username,#useremail{
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
.password{
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
/* p:first-child{
  margin-top: 5vh;
} */
p{
  font-size: 50px;
  color: red;
  /* font-weight: small; */
}

input:invalid {
  background: pink;
}
</style>
