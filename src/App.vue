<template>
  <div id="app">
    <router-link to="/" tag="button" id='home-button'> Home </router-link>
    <b-nav-item to="/posts-manager">Posts Manager</b-nav-item>
    <router-link to="/posts-manager">Posts</router-link>
    <button v-on:click='logout' id='logout-button'> Logout </button>
    <button  v-on:click='login' id='login-button'> Login </button>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      authenticated: false
    }
  },
  created () {
    this.isAuthenticated()
  },
  watch: {
    // Everytime the route changes, check for auth status
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      debugger
      this.authenticated = await this.$auth.isAuthenticated()
    },
    login () {
      debugger
      this.$auth.loginRedirect('/posts-manager')
    },
    async logout () {
      debugger
      await this.$auth.logout()
      await this.isAuthenticated()

      // Navigate back to home
      this.$router.push({ path: '/' })
    }
  }
}
</script>