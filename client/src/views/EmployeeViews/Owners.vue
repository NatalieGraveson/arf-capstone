<template>
  <div class="row">
    <div class="col-12">
      <h1 class="ownerTitle">Pet Owners</h1>

    </div>
    <div class="col-xs-12 col-md-4 offset-md-4">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="">Name</th>
          </tr>
        </thead>
        <tbody>
          <owner v-for="owner in owners" :ownerData="owner"></owner>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
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
      }
    },
    methods: {},
    components: {
      Owner
    }
  }
</script>
<style>
  .ownerTitle {
    margin-top: 100px;
  }
</style>