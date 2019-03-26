<template>
   <div class="profCard row">
      <div class="col-12">
         <div v-if="activePet.name" class=" pet-card row">
            <div class="col-12 col-md-4">
               <h2>{{activePet.name}}</h2>
               <button class=' check btn-success' v-if="!activePet.checkedIn"
                  @click="checkIn(); timeIn()">CHECKIN</button>
               <button class="check btn-danger" v-if="activePet.checkedIn" @click="checkOut(); timeOut()">CHECK
                  OUT</button><br>
               <img class="petimg" v-bind:src="activePet.img">
            </div>
            <div class="col-12 offset-md-1 col-md-7">
               <edit-pet></edit-pet>
               <h5>{{pstatus}}</h5>
               <p>Checked in Time: {{activePet.checkIn}} </p>
               <p>Checked out Time: {{activePet.checkOut}}</p>
               <p>Breed: {{activePet.breed}}</p>
               <dog-note></dog-note>
            </div>
         </div>
         <div class="row notes-card">
            <div class="col-12">
               <button @click="addNote = true, reportCard = false, incidentModal = false"
                  class="btn btn-primary">Notes</button>
               <button @click="addNote = false, reportCard = true, incidentModal = false" class="btn btn-primary">Report
                  Card</button>
               <button @click="addNote = false, reportCard = false, incidentModal = true"
                  class="btn btn-primary">Incident Report</button>
            </div>
            <div class="col-12" v-show="addNote">
               <add-note></add-note>
            </div>
            <div class="col-12" v-show="incidentModal">
               <incident-modal></incident-modal>
            </div>
            <div class="col-12" v-show="reportCard">
               <report-card></report-card>
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
   import IncidentModal from '@/components/EmployeeComponents/IncidentModal.vue'
   import AddNote from '@/components/EmployeeComponents/AddNote.vue'
   import DogNote from '@/components/EmployeeComponents/DogNote.vue'
   import ReportCard from '@/components/EmployeeComponents/ReportCard.vue'

   export default {
      name: "PetProfile",
      props: [],
      data() {
         return {
            addNote: false,
            incidentModal: false,
            reportCard: false
         }
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
         timeIn() {
            let date = new Date()
            let day = date.getDate()
            let month = date.getMonth()
            let hour = date.getHours()
            let minute = date.getMinutes()
            let second = date.getSeconds()
            let amPm = "AM"
            if (hour == 0) {
               hour = 12
            }

            if (hour > 12) {
               hour = hour - 12
               amPm = "PM"
            }
            hour = (hour < 10) ? "0" + hour : hour
            minute = (minute < 10) ? "0" + minute : minute
            second = (second < 10) ? "0" + second : second
            let checkIn = hour + ":" + minute + " " + amPm
            let petOwnerId = this.$store.state.activePet.petOwnerId
            let name = this.$store.state.activePet.name
            let petId = this.$store.state.activePet._id
            let payload = {
               checkIn,
               petOwnerId,
               name,
               petId
            }
            return this.$store.dispatch('editActivePet', payload)
         },
         timeOut() {
            let date = new Date()
            let day = date.getDate()
            let month = date.getMonth()
            let hour = date.getHours()
            let minute = date.getMinutes()
            let second = date.getSeconds()
            let amPm = "AM"
            if (hour == 0) {
               hour = 12
            }

            if (hour > 12) {
               hour = hour - 12
               amPm = "PM"
            }
            hour = (hour < 10) ? "0" + hour : hour
            minute = (minute < 10) ? "0" + minute : minute
            second = (second < 10) ? "0" + second : second
            let checkOut = hour + ":" + minute + " " + amPm
            let petOwnerId = this.$store.state.activePet.petOwnerId
            let name = this.$store.state.activePet.name
            let petId = this.$store.state.activePet._id
            let payload = {
               checkOut,
               petOwnerId,
               name,
               petId
            }
            return this.$store.dispatch('editActivePet', payload)
         },
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
         EditPet,
         IncidentModal,
         AddNote,
         DogNote,
         ReportCard
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