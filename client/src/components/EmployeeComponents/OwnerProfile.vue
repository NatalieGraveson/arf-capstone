<template>
  <div class="row newCard">
    <div class="col-12">
      <div class="row">
        <div class="col-md-6 col-12">
          <p>Name: {{owner.name}}</p>
          <hr>
          <p>Address: {{owner.address}}</p>
          <hr>
          <p>Phone Number: {{owner.phone}}</p>
          <hr>
          <p>Email: {{owner.email}}</p>
        </div>
        <div class="col-md-6 col-12">
          <p>Emergency Contact</p>
          <hr>
          <p>Name: {{owner.eContactName}}</p>
          <hr>
          <p>Phone Number: {{owner.eContactNumber}}</p>
        </div>
        <edit-owner></edit-owner>
        <div class="col-4 col-md-3 petnames mt-3" v-for="pet in pets" @click="getActivePet(pet._id)">
          <div class="row">
            <div class="col-12 text-center pet-base">
              <p>{{pet.name}}</p>
              <img class="pet-thumb d-flex justify-content-center" v-bind:src="pet.img">
            </div>
          </div>
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
  import EditOwner from '@/components/EmployeeComponents/EditOwner.vue'
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
      this.$store.dispatch('getPetsByOwnerId', this.id)
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      owner() {
        return this.$store.state.owners.find(o => o._id == this.$route.params.id) || this.$store.state.activeOwner
      },
      pets() {
        return this.$store.state.pets
      },
      pet() {
        return this.$store.state.pets.find(p => p._id == this.$route.params.id) ||
          this.$store.state.activePet
      },
      activePet() {
        return

        this.$store.state.activePet
      }
    },
    methods: {
      getActivePet(id) {
        let payload = {
          petOwnerId: this.owner._id,
          petId: id
        }
        this.$store.dispatch('getActivePet', payload)
      }
    },
    components: {
      AddPet,
      EditOwner
    }
  }
</script>
<style scoped>
  .pet-base {
    margin: -35px 10px 15px 10px;
  }

  .pet-thumb {
    max-height: 150px;
    border-radius: 10px;
  }

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

  hr {
    margin-top: -12px;
    margin-bottom: 0px;
    background-color: rgb(71, 71, 71);
  }

  .petnames {
    background-color: rgba(0, 0, 0, 0.603);
    border-radius: 10px;
    margin: 0vh 3.4vw 1vh 3.4vw;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    min-width: 150px;
    box-shadow: 5px 5px 5px rgba(177, 176, 176, 0.719);
  }
</style>