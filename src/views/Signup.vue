<template>
  <v-form ref="form" v-model="valid" lazy-validation dark >
    <v-text-field
      v-model="firstname"
      :rules="nameRules"
      :counter="10"
      label="First Name"
      required
    ></v-text-field>
		<v-text-field
      v-model="lastname"
      :rules="nameRules"
      :counter="10"
      label="Last Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
		<v-text-field
      v-model="password"
      type="password"
      label="Password"
      required
    ></v-text-field>
		<v-text-field
      v-model="confirmpassword"
      type="password"
      label="Confirm Password"
      required
    ></v-text-field>
		<v-messages id="demo"></v-messages>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
			firstname:'',
			lastname: '',
			password: '',
			confirmpassword: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
						firstname: this.firstname,
						lastname: this.lasttname,
            email: this.email,
						password: this.password,
						confirmpassword: this.confirmpassword
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
		},
		watch:{
			confirmpassword: function(val){
				if(val == null){
					document.getElementById('demo').innerHTML="";
				}
				if (val == this.password){
					document.getElementById('demo').innerHTML="";
				}
					else{
						document.getElementById('demo').innerHTML= "Password and Confirm password does not match";
					}

			}
			
		}
  }
</script>
<style>
form.v-form {
    margin: 0 676px;
}
</style>
