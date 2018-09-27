<template>
<div class="login">

	<b-alert variant="danger" show v-if='status'>Username Password does'nt match</b-alert>

	<p>Login Page</p>
	<label>Username: </label>
	<input name='username' v-model="username" @keyup= "statusChanged"/>
	<br/>
	<label>Password: </label>
	<input type="password" v-model="password" @keyup= "statusChanged"/>
	<button @click='statusChanged'></button>
</div>
</template>

<style>
	.login{
		margin: 0px 91px;
	}
</style>

<script>
	export default{
		data(){
			return{
				status: false,
				username: '',
				password: ''
			}
		},
		methods: {
    statusChanged() {
    	debugger
      if(this.username == "jasdeep" && this.password == "qwerty"){
      	debugger
      	this.status= false;
      }
      else{
       this.status= true;
      }
    }
	}
	}
</script>
