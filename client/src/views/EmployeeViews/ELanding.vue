<template>
  <div class="eLanding row">
    <div class="col-12 elheadr ">
      <h1 class="mb-5">This is Employee Landing</h1>
      <div class="col-12 dogbucket">
        <dog></dog>
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
    data() {
      return {}
    },
    computed: {},
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