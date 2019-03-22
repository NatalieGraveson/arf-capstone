<template>
  <div class="eLanding row">
    <div class="col-12 elheadr ">
      <h1 class="mb-5">This is Employee Landing</h1>
      <div class="col-12">
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Sort By
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Name</a>
            <a class="dropdown-item" href="#">Checked In</a>
          </div>
        </div>
      </div>
      <div class="col-12 dogbucket">
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
    methods: {},
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
  }
</style>