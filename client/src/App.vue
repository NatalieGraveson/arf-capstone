<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#" @click="$router.push({name:'ELanding'})">A r f</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" @click="$router.push({name:'ELanding'})">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="$router.push({name:'Incidents'})">Incidents</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="$router.push({name:'Owners'})">Owners</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="$router.push({name:'Billing'})">Billing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="$router.push({name:'Registration'})">Registration</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      <div><button class="btn logoutbtn" @click="logout"><i class="fas fa-sign-out-alt"></i> Logout</button></div>
    </nav>

    <router-view />

  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      //Authenticate on startup
      this.$store.dispatch('authenticate')
    },
    data() {
      return {
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    background-image: url('http://i.imgur.com/mOL5g.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    align-content: flex-start;

  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .navbar {
    cursor: pointer;
    border-radius: 0 0 15px 15px
  }
</style>