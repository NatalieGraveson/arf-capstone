<template>
  <div class="registerowner mt-3">
    <form class="row" @submit.prevent='CreateOwner'>
      <div class="col-12">
        <input type="text" v-model="newOwner.name" name="Name" placeholder="Name:" required>
        <br>
        <input type="text" name="Address" placeholder="Address:">
        <br>
        <input type="number" name="Phone Number" placeholder="Phone Number:">
        <br>
        <input type="text" name="Emergency Contact" placeholder="Emergency Contact:">
        <br>
      </div>
      <div class="col-12 mt-3">
        <input type="submit" value="CreateOwner">
      </div>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'RegisterOwner',
    data() {
      return {
        newOwner: {
        }
      }
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>