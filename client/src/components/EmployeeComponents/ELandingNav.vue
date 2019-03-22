<template>
  <div class=" ELandingNav">
    <nav class="navbar navbar-light bg-light landNav">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle mb-5" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Sort By
          </button>
          <div class="dropdown-menu">
            <a @click='sortPetName' class="dropdown-item" href="#">Name</a>
            <a @click='sortCheckedIn' class="dropdown-item" href="#">Checked In</a>
          </div>
        </div>
      </form>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>
<style>
  .landNav {
    Margin-top: 50px;
  }
</style>