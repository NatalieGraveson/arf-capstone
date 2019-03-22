<template>
  <div class="eLanding row">
    <div class="col-12 elheadr ">
      <h1 class="mb-5 text-white">All Animals</h1>
      <div class="col-12">
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
      </div>
      <div class="row">
        <dog v-for="dog in dogs" :dogData="dog"></dog>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import Dog from '@/components/EmployeeComponents/Dog.vue'
  export default {
    name: "eLanding",
    props: [],
    mounted() {
      this.$store.dispatch('getPets'),
        sortPetName()
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
      Dog
    }
  }
</script>
<style>
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
  }
</style>