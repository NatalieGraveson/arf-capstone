<template>
   <div class="Incidents">
      <nav class="navbar navbar-light landNav">
         <form class="form-inline">
            <input @input="" class="form-control mr-sm-2" type="search" placeholder="" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
         </form>
         <button class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModalCenter">New
            Incident</button>
      </nav>
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">Incident Form</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div class="modal-body">
                  <form @submit.prevent='createIncident()'>
                     <input class="formfield" type="text" placeholder="Pet's Name" v-model="note.petName" name="petName"
                        required>
                     <br>
                     <input class="formfield" type="text" v-model="note.body" name="body">
                     <br>
                     <select v-model="note.flagged" required>
                        <option disabled value="">Please Select One</option>

                        <option>Incident</option>
                     </select>
                  </form>
                  <br>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-primary">Submit</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import router from '@/router.js'
   export default {
      name: "",
      props: [],
      data() {
         return {
            note: {
               flagged: ''
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