<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
     <!-- <p> -->
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <!-- <router-link to="/foo">Go to Foo</router-link> -->
        <!-- <router-link to="/bar">Go to Bar</router-link> -->
    <!-- </p> -->

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '登陆成功'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h2 {
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
