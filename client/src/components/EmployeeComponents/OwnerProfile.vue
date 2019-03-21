<template>
  <div class="row newCard">
    <div class="col-12">
      <h1>Owner Information</h1>
      <div class="row">
        <div class="col-md-6 col-12">
          <hr>
          <h6>Name: {{owner.name}}</h6>
          <hr>
          <h6>Address: {{owner.address}}</h6>
          <hr>
          <h6>Phone Number: {{owner.phone}}</h6>
        </div>
        <div class="col-md-6 col-12">
          <hr>
          <h3>Emergency Contact</h3>
          <hr>
          <h6>Name: {{owner.eContactName}}</h6>
          <hr>
          <h6>Phone Number: {{owner.eContactNumber}}</h6>
        </div>
        <div class="col-12">
          <br>
          <h4>Exisitng Pets Live Here</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <add-pet></add-pet>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AddPet from '@/components/EmployeeComponents/AddPet.vue'
  export default {
    name: "",
    props: [],
    data() {
      return {}
    },
    mounted() {
      if (!this.owner._id) {
        this.$store.dispatch('getActiveOwner', this.id)
      }
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      owner() {
        return this.$store.state.owners.find(o => o._id == this.$route.params.id) || this.$store.state.activeOwner
      },
    },
    methods: {},
    components: {
      AddPet
    }
  }
</script>
<style scoped>
  .newCard {
    /* background-image: url('https://vignette.wikia.nocookie.net/edwikia/images/0/0d/Plank.png/revision/latest/scale-to-width-down/338?cb=20170726093347'); */
    /* background-repeat: no-repeat; */
    /* background-size: 400px 150px; */
    background-color: rgba(0, 0, 0, 0.267);
    border-top-color: black;
    border-right-color: black;
    border-right-style: solid;
    border-top-style: solid;
    letter-spacing: 1px;
    padding-top: 1vh;
    padding-bottom: 1vh;
    margin-top: 3vh;
    color: white;
    text-shadow: -1px -1px black;
    letter-spacing: 2px;
    align-items: center !important;
    /* max-width: 22vw;
    min-height: 18vh; */
    border-radius: 20px;
  }
</style>