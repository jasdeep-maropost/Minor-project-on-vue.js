<template>
    <div>
		<v-toolbar class="black white--text">
      <img src="@/assets/panda.jpg" height="50">
      <v-toolbar-title v-text="title">
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items  >
          <v-btn class="white--text" flat to="/">Home</v-btn>
          <v-btn class="white--text" flat to="/login">Posts Manager</v-btn >
          <v-btn class="white--text" flat href="/login" @click.prevent="login" v-if="!activeUser">Login</v-btn >
          <v-btn class="white--text" flat href="#" @click.prevent="logout" v-else>Logout</v-btn >
        </v-toolbar-items>
    </v-toolbar>
	</div>
</template>



<script>

export default {
  data () {
    return {
			activeUser: null,
			title: 'P-Panda'
    }
  },
  async created () {
    await this.refreshActiveUser()
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    '$route': 'refreshActiveUser'
  },
  methods: {
    login () {
      this.$auth.loginRedirect()
    },
    async refreshActiveUser () {
      this.activeUser = await this.$auth.getUser()
    },
    async logout () {
      debugger
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.push('/')
    }
  }
}
</script>
