<template>
  <div class="eLanding">
    <ELandingNav class="landNav"></ELandingNav>
    <div class="row">
      <div class="col-12 elheadr ">
        <h1 class="mb-5 text-white">All Animals</h1>
        <div class="row">
          <dog v-for="dog in dogs" :dogData="dog"></dog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import Dog from '@/components/EmployeeComponents/Dog.vue'
  import ELandingNav from '@/components/EmployeeComponents/ELandingNav.vue'
  export default {
    name: "eLanding",
    props: [],
    mounted() {
      this.$store.dispatch('getPets')

    },
    data() {
      return {}
    },
    computed: {
      dogs() {
        return this.$store.state.pets
      }
    },
    methods: {
      sortPetName() {
        let pets = this.$store.state.pets
        pets.sort(function (a, b) {
          return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        })
      },
      sortCheckedIn() {
        let pets = this.$store.state.pets
        pets.sort(function (a, b) {
          return b.checkedIn > a.checkedIn ? 1 : -1
        })
      }
    },
    components: {
      Dog,
      ELandingNav
    }
  }
</script>
<style scoped>
  .elheadr {
    padding: 5vh;
    margin-top: 50px;

  }

  .dogbucket {
    /* background-color: rgba(0, 0, 0, 0.212); */
    padding: 5vw;
    border-radius: 20px;
    flex-direction: row;

  }

  h1 {
    text-shadow: 1px 2px black;
    margin-top: 109px;
  }
</style>