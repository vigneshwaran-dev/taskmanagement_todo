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

<style lang="scss" scoped>
.login-container {
  position: absolute;
  width: 768px;
  height: 480px;
  margin : auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 2em;
  overflow: hidden;
  background: white;

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 4;
  }

  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: #365e5a;
    color: black;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }

  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;

    h2, p {
      color : white;
    }

    p{
      font-size: 16px;
    }
  }

  .overlay-left {
    @include overlays(-20%);
  }

  .overlay-right {
    @include overlays(0);
    right: 0;
  }

  h2 {
    margin: 0;
  }

  p {
    margin: 20px 0 30px;
  }

  button {
    border-radius: 1em;
    border: 1px solid #db9f08;
    background-color: #e9ab0f;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 0.1s ease-in;

    &:active {
      transform: scale(0.9);
    }

    &:focus {
      outline: none;
    }
  }

  button.invert {
    background-color: transparent;
    border-color: white;
    color: white;
  }

  form {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 90px 60px;
    width: calc(50% - 120px);
    height: calc(100% - 180px);
    text-align: center;
    background: white;
    transition: all 0.5s ease-in-out;

    .sub {
      font-size: 1rem;
    }

    .input-container {
      position: relative;
    }

    .input-container i {
      position: absolute;
      left: 0;
      top: 8px;
      padding: 9px 8px;
      color: #357d72;
    }

    .input-container .icon-error {
      color: #fc8460;
    }

    .input-container input[type="text"] {
      padding-left: 40px;
    }

    .input-container input[type="password"] {
      padding-left: 40px;
      //padding-right: 40px;
    }

    .input-container .input-text {
      width: 100%;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      margin: 8px 0;
      outline: none;
      padding: 8px;
      box-sizing: border-box;
      transition: 0.3s;
    }
  }

  .sign-in {
    left: 0;
    z-index: 2;
  }

  .sign-up {
    left: 0;
    z-index: 1;
    opacity: 0;
  }
}

.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 3;
  }

  .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    transform: translateX(50%);
  }

  .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    transform: translateX(20%);
  }
}
</style>