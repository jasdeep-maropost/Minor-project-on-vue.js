<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12 bottom_up">
              <v-toolbar dark color="">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    to="/okta"
                    target="_blank"
                    slot="activator"
                  >
                    <v-icon large>code</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-alert v-model="successful" dismissible type="success">
                  Login successfull
                </v-alert>
                <v-alert v-model="unsuccessful" dismissible color="error">
                  Username and Password does'nt match
                </v-alert>
              <v-card-text>

                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model= "username"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="" @click="onSubmit()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>


<script>
  export default {
    data: () => ({
      drawer: null,
      username: '',
      password: '',
      successful: null,
      unsuccessful: null
    }),
    props: {
      source: String
    },
    methods: {
      onSubmit(){
        if(this.username == "{user-name}" && this.password == "{password}")
        {
          ('login Successfull');
          this.successful = true;
          this.unsuccessful = false;
        }
        else{
          console.log('username and password doesnt match');
          this.username = '';
          this.password = '';
          this.successful = false;
          this.unsuccessful = true;
        }
      }
    }
  }
</script>
<style>
.bottom_up{
  bottom: 42px;
}
</style>



