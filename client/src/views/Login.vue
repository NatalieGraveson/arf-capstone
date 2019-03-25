<template>
  <div class="login">
    <div class="row cuteDog">
      <div class="col-12">
        <form class="coolForm" v-if="loginForm" @submit.prevent="loginUser">
          <input type="email" v-model="creds.email" placeholder="email">
          <input type="password" v-model="creds.password" placeholder="password">
          <button type="submit">Login</button>
        </form>
        <form v-else @submit.prevent="register">
          <input type="text" v-model="newUser.name" placeholder="name">
          <input type="email" v-model="newUser.email" placeholder="email">
          <input type="password" v-model="newUser.password" placeholder="password">
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div class="action col-12" @click="loginForm = !loginForm">
        <p v-if="loginForm">No account? Click here to Register</p>
        <p v-else>Already have an account? Click here to Login</p>
      </div>
    </div>
    <div class="row full">

      <div class="col-12 oneBar">
        <p>cool</p>
      </div>
      <div class="col-12 twoBar">

      </div>
      <div class="col-12 threeBar">

      </div>
      <div class="col-12 fourBar">

      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  export default {
    name: "login",
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    }
  };
</script>

<style>
  .action {
    cursor: pointer;
    color: white;
    text-shadow: -1px -1px black;
  }

  .cuteDog {
    background-image: url('https://lostdogsillinois.org/wp-content/uploads/2016/04/dog-close-up-backgrounds-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
  }

  .full {
    margin-left: -15px;
    margin-right: -15px;
  }

  .oneBar {
    background-color: black;
    height: 250px;
  }

  .twoBar {
    height: 335px;
  }

  .coolForm {
    margin-top: 86px;
  }
</style>