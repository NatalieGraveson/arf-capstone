<template>
  <div class="row registration">
    <div class="col-12">
      <h1 class=""></h1>

    </div>
    <div class="col-md-8 offset-md-2 col-12" v-if="registerForm">
      <register-owner></register-owner>
    </div>
  </div>
</template>


<script>
  import RegisterOwner from '@/components/EmployeeComponents/RegisterOwner.vue'
  import RegisterPet from '@/components/EmployeeComponents/RegisterPet.vue'
  export default {
    name: 'registration',
    data() {
      return {
        registerForm: true,
      }
    },
    computed: {},
    methods: {},
    components: {
      RegisterOwner,
      RegisterPet
    }
  }
</script>


<style scoped>
  .regbut {
    padding: 20px;
  }

  h1 {
    padding: 8vh;
  }
</style>