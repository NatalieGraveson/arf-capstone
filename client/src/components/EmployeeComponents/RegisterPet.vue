<template>
  <div class="registerpet">
    <form class="row" @submit.prevent='CreatePet'>
      <div class="col-6">
        <input type="text" name="Name" placeholder="Name:" required>
        <br>
        <input type="text" name="Address" placeholder="Address:">
      </div>
      <div class="col-6">
        <input type="submit" value="Create Pet">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "RegisterPet",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>
<style>
</style>