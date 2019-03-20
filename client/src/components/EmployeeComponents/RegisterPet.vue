<template>
  <div class="registerpet">
    <form class="row" @submit.prevent='CreatePet'>
      <div class="col-12 formarea">
        <input class="formfield" type="text" name="Name" placeholder="Name: (Required)" required>
        <br>
        <input class="formfield" type="number" name="age" placeholder="Age:">
        </br>
        <input class="formfield" type="text" name="Breed" placeholder="Breed: (Required)">
        <br>
        <input class="formfield" type="text" name="Img" placeholder="Photo: (Required)">
      </div>
      <div class="col-12">
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
    methods: {
      createPet() {
        this.$store.dispatch('createPet', this.newPet)
      }
    },
    components: {}
  }

</script>
<style>
  .registerpet {
    background-color: rgba(0, 0, 0, 0.514);
    border-radius: 30px;
  }

  .formarea {
    min-height: 60vh;
  }

  .formfield {
    min-width: 22vw;
    padding: 10px;
    margin-top: 1em;
  }
</style>