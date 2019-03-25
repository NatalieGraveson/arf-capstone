<template>
  <div class="row">
    <OwnerNav class="landNav"></OwnerNav>
    <div class="col-12">
      <h1 class="ownerTitle"></h1>

    </div>
    <div class="col-12 col-md-8 offset-md-2">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="">Owner Name</th>
          </tr>
          <br>
        </thead>
        <tbody>
          <owner v-for="owner in ownerMatches.length ? ownerMatches : owners" :ownerData="owner"></owner>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import OwnerNav from '@/components/EmployeeComponents/OwnerNav.vue'
  import router from '@/router.js'
  import Owner from '@/components/EmployeeComponents/Owner.vue'
  export default {
    name: "owners",
    created() { },
    props: [],
    mounted() {
      this.$store.dispatch("getOwners")
    },
    data() {
      return {}
    },
    computed: {
      owners() {
        return this.$store.state.owners
      },
      ownerMatches() {
        return this.$store.state.ownerMatches
      }

    },
    methods: {},
    components: {
      Owner,
      OwnerNav
    }
  }
</script>
<style>
  .ownerTitle {
    margin-top: 100px;
    margin-bottom: 47px;
  }
</style>