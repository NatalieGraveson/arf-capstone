<template>
   <div class="profCard row">
      <div class="col-12">
         <div v-if="activePet.name" class=" pet-card row">
            <div class="col-12 col-md-4">
               <h2>{{activePet.name}}</h2>
               <button class=' check btn-success' v-if="!activePet.checkedIn" @click="checkIn">CHECKIN</button>
               <button class="check btn-danger" v-if="activePet.checkedIn" @click="checkOut">CHECK OUT</button><br>
               <img class="petimg" v-bind:src="activePet.img">
            </div>
            <div class="col-12 offset-md-1 col-md-7">
               <h5>{{pstatus}}</h5>
               <p>Breed: {{activePet.breed}}</p>
               <p>Age: {{activePet.age}}</p>
               <edit-pet></edit-pet>
            </div>
         </div>
         <div class="row notes-card">
            <div class="col-12">
               <p> Notes / Reports</p>
            </div>
         </div>
         <div class="row">
            <div class="col-12 billing-card">
               <p> Billing?</p>
            </div>
         </div>
      </div>

   </div>
</template>

<script>
   import EditPet from '@/components/EmployeeComponents/EditPet.vue'
   export default {
      name: "PetProfile",
      props: [],
      data() {
         return {}
      },
      mounted() {
      },
      computed: {
         activePet() {
            return this.$store.state.activePet
         },
         pstatus() {
            if (this.activePet.checkedIn) {
               return 'Checked In'
            }
            return 'Checked Out'
         },
      },
      methods: {
         checkIn() {
            let { checkedIn, _id: petId, name: petName } = this.$store.state.activePet //destructuring
            if (checkedIn) {
               return alert("This pet is already checked in")
            }
            checkedIn = true
            if (!petName) {
               return alert("Please select a pet")
            }
            let payload = {
               checkedIn,
               petId,
               petName
            }
            return this.$store.dispatch('editActivePet', payload)
         },
         checkOut() {
            let { checkedIn, _id: petId, name: petName } = this.$store.state.activePet //destructuring
            if (checkedIn == false) {
               return alert("This pet is already checked in")
            }
            checkedIn = false
            if (!petName) {
               return alert("Please select a pet")
            }
            let payload = {
               checkedIn,
               petId,
               petName
            }
            return this.$store.dispatch('editActivePet', payload)
         }
      },
      components: {
         EditPet
      }
   }
</script>
<style>
   .check {
      border-radius: 5px;
      margin: 5px;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.644);
   }

   .petimg {
      width: 150;
      height: 300px;
      border-radius: 10px;
      box-shadow: 3px 3px 3px rgba(255, 255, 255, 0.589);
   }

   .profCard {
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

   .pet-card {
      background-color: rgba(0, 0, 0, 0.445);
      padding: 5px 0px;
      margin: 0px 0px;
      border-radius: 10px;
   }
</style>