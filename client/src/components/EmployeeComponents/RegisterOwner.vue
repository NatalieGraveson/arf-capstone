<template>
  <div class="registerowner">
    <form class="row" @submit.prevent='createOwner()'>
      <div class="col-12">
        <h3>Owner Information</h3>
        <input class="formfield" type="text" v-model="newPetOwner.name" name="Name" placeholder="Name:" required>
        <br>
        <input class="formfield" type="text" v-model="newPetOwner.address" name="Address" placeholder="Address:">
        <br>
        <input class="formfield" type="number" v-model="newPetOwner.phone" name="Phone Number"
          placeholder="Phone Number:">
        <hr>
        <h5>Emergency Contact</h5>
        <input class="formfield" type="text" v-model="newPetOwner.eContactName" name="Emergency Contact Name"
          placeholder="Name:">
        <br>
        <input class="formfield" type="text" v-model="newPetOwner.eContactNumber" name="Emergency Contact Number"
          placeholder="Number:">
      </div>
      <div class="col-12 mt-3">
        <button class="btn btn-outline-light" type="submit">Create Owner</button>
      </div>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'RegisterOwner',
    props: ['ownerData'],
    data() {
      return {
        newPetOwner: {
        }
      }
    },
    computed: {},
    methods: {
      createOwner() {
        this.$store.dispatch('createOwner', this.newPetOwner)
      }
    },
    components: {

    }
  }
</script>


<style scoped>
  .registerowner {
    background-image: linear-gradient(#89a6b800, #384349);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    border-style: solid;
    border-color: #384349;
    border-radius: 30px;
    padding: 30px;
  }

  h3 {
    color: black;
    text-shadow: -1px -1px black;
    font-size: 36px;
  }

  h5 {
    color: rgb(185, 37, 32);
    text-shadow: 1px 1px black;
    font-size: 36px;
  }


  .formfield {
    min-width: 30%;
    max-width: 60%;
    padding: 10px;
    margin-top: 1em;
  }
</style>