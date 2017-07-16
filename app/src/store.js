import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    userlist: [
      {username: 'Rob', email: 'ivsly@qq.com', password: '123', login: true}
    ]
  },
  mutations: {
    toSuccess (state) {
      // state.isLogin = true
    },
    register (state, user) {
      state.userlist.push(user)
      console.log(user)
    },
    login (state, user) {
      // state.userlist.push()
    },
    gologin () {

    }
  },
  getters: {
    isLogin: state => {
      return state.userlist.filter(user => user.login)
    }
  }
})

export default store
