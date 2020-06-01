<template>
  <div class="login-container" :class="{ 'sign-up-active': signUp }">
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-left">
          <h2>Already an User?</h2>
          <p>Signin with your account to access your todos</p>
          <button class="invert" @click="signUp = !signUp">Sign In</button>
        </div>

        <div class="overlay-right">
          <h2>First time visitor?</h2>
          <p>Creating an account takes less than a minute</p>
          <button class="invert" @click="signUp = !signUp">Sign Up</button>
        </div>
      </div>
    </div>

    <form class="sign-up" @submit.prevent="doSignup">
      <h2>Create account</h2>
      
      <div class="sub">60 seconds starts now!</div>
      
      <div class="input-container">
        <i class="fa fa-user fa-lg" :class="{'icon-error' : signupError.name}"></i>
        <input type="text" class="input-text" placeholder="Name" v-model="signup.name" />
      </div>
      
      <div class="input-container">
        <i class="fa fa-at fa-lg" :class="{'icon-error' : signupError.email}"></i>
        <input type="text" class="input-text" placeholder="Email" v-model="signup.email" />
      </div>
      
      <div class="input-container">
        <i class="fa fa-lock fa-lg" :class="{'icon-error' : signupError.password}"></i>
        <input type="password" class="input-text" placeholder="Password" v-model="signup.password" />
      </div>

      <div class="input-container">
        <i class="fa fa-lock fa-lg" :class="{'icon-error' : signupError.confirmPassword}"></i>
        <input type="password" class="input-text" placeholder="Confirm Password" v-model="confirmPassword" />
      </div>
      
      <button type="submit">Sign Up</button>

      <p v-if="signupError.exist"><font color="red">Email already in use</font></p>
    </form>

    <form class="sign-in" @submit.prevent="doLogin">
      <h2>Sign into your account</h2>
      
      <div class="sub">Confirm its you</div>

      <div class="input-container">
        <i class="fa fa-at fa-lg" :class="{'icon-error' : loginError.email}"></i>
        <input type="text" class="input-text" placeholder="Email" v-model="login.email" />
      </div>

      <div class="input-container">
        <i class="fa fa-lock fa-lg" :class="{'icon-error' : loginError.password}"></i>
        <input type="password" class="input-text" placeholder="Password" v-model="login.password"/>
      </div>

      <button type="submit">Sign In</button>

      <p v-if="loginError.invalid"><font color="red">Invalid Credentials</font></p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      signup: {
        name: "",
        email: "",
        password: ""
      },
      loginError: {
        email: false,
        password: false,
        invalid: false
      },
      signupError: {
        name: false,
        email: false,
        password: false,
        exist: false,
        confirmPassword : false
      },
      confirmPassword : '',
      signUp: false,
      loginPass: false,
      signupPass: false,
    };
  },
  methods: {
    doLogin() {
      this.loginError.email = this.loginError.password = false;

      this.login.email = this.login.email.trim();
      if(this.login.email === '' || !this.checkEmail(this.login.email))
        this.loginError.email = true;

      if(this.login.password.length < 8)
        this.loginError.password = true;

      if(this.loginError.email || this.loginError.password)
        return;


      axios.post(this.$API+'/login', this.login).then(
        (res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/");
          }
        },
        (err) => {
          if(err)
            this.loginError.email = this.loginError.password = this.loginError.invalid = true;
        }
      );
    },

    doSignup() {
      this.signupError.name = this.signupError.email = this.signupError.password = this.signupError.confirmPassword = false;

      if(this.signup.name.length < 4)
        this.signupError.name = true;

      this.signup.email = this.signup.email.trim();
      if(this.signup.email === '' || !this.checkEmail(this.signup.email))
        this.signupError.email = true;

      if(this.signup.password.length < 8){
        this.signupError.password = true;
        this.signupError.confirmPassword = true;
      }
        
      if(this.signup.password !== this.confirmPassword){
        this.signupError.confirmPassword = true;
        this.confirmPassword = '';
      } 

      if(this.signupError.name || this.signupError.email || this.signupError.password || this.signupError.confirmPassword)
        return; 

      axios.post(this.$API+'/register', this.signup).then(
        (res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/");
          }
        },
        (err) => {
          if(err)
            this.signupError.exist = this.signupError.email = true;
        }
      );
    },

    checkEmail(email){
      //eslint-disable-next-line
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }
  },
  created() {
    if (localStorage.getItem("token")) this.$router.push("/");
  },
};
</script>