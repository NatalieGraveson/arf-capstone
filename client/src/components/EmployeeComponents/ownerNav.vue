<template>
  <div class=" OwnerNav">
    <nav class="navbar navbar-light landNav">
      <form class="form-inline">
        <input @input="findOwnerMatches" class="form-control mr-sm-2" type="search" placeholder="Search Owner Name..."
          aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Sort By
          </button>
          <div class="dropdown-menu">
            <a @click='' class="dropdown-item" href="#"></a>
            <a @click='' class="dropdown-item" href="#"></a>
          </div>
        </div>
      </form>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "OwnerNav",
    props: [],
    data() {
      return {}
    },
    computed: {


    },
    methods: {
    },
    findOwnerMatches(e) {
      let owners = [...this.$store.state.owners]
      let query = e.target.value.toLowerCase()
      let matches = owners.filter(owner => owner.name.toLowerCase().includes(query))
      if (!query) {
        ownerMatches = []
      }
      this.$store.dispatch('FindOwnerMatches', ownerMatches)
    },
    components: {},
  }
</script>
<style>
  .landNav {
    top: 55px;
    background-color: #424c56;
    z-index: 5;
  }
</style>