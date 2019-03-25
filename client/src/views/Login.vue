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
        <h2>A r f</h2>
        <p>is a CRM desgined for managing relationships and interactions with customers and their pets</p>
      </div>
      <div class="col-12 twoBar">
        <h3>as a customer, you will create an account which gives you access to view...</h3>
        <h3>you and your pets info</h3>
        <h3>when your pet checks in and out</h3>
        <h3>reports on your pet for the day</h3>
        <h3>billing information</h3>
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
    background-color: white;
  }

  .threeBar {
    height: 363px;
    background-image: url('http://2.bp.blogspot.com/-HROIqBef8ak/UEhiSXZuX5I/AAAAAAAABCA/vmqPFx6iPmw/s1600/natural-national-geographic-full-HD-nature-background-wallpaper-for-laptop-widescreen.jpg')
  }

  .coolForm {
    margin-top: 86px;
  }

  h2 {
    color: white;
    margin-top: 20px;
    font-size: 50px;
  }

  p {
    color: white;
    margin-top: 42px;
    font-size: 25px;
  }
</style>