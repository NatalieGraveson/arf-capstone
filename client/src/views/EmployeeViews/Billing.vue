<template>
  <div class="row billing">
    <OwnerBillNav class="landNav">
    </OwnerBillNav>
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
          <OwnerBill v-for="owner in owners" :ownerData="owner">
          </OwnerBill>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
  import OwnerBillNav from '@/components/EmployeeComponents/OwnerBillNav.vue'
  import router from '@/router.js'
  import OwnerBill from '@/components/EmployeeComponents/OwnerBill.vue'
  export default {
    name: "billing",
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
      },
      activeOwner() {
        return this.$store.state.activeOwner
      }

    },
    methods: {},
    components: {
      OwnerBill,
      OwnerBillNav
    }
  }
</script>
<<<<<<< HEAD


<style scoped>
  .billing {
    padding-top: 100px;
=======
<style>
  .ownerTitle {
    margin-top: 100px;
    margin-bottom: 47px;
>>>>>>> 035a5697b81b5d67163849995409fec54cc5be1c
  }
</style>