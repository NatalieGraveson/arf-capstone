<template>
  <div class="row registration">
    <div class="col-md-10 offset-1 col-12">
      <h1>Registration Form Here</h1>
      <button class="btn btn-primary" @click="registerForm = !registerForm">
        {{ registerForm ? 'Register Pet' : 'Register Owner' }}
      </button>
    </div>
    <div class="col-md-10 offset-1 col-12" v-if="registerForm">
      <register-owner></register-owner>
    </div>
    <div class="col-md-10 offset-1 col-12" v-if="!registerForm">
      <register-pet></register-pet>
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

</style>