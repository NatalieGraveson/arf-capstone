<template>
  <div class="incidentmodal">
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
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">New
      Incident</button>

  </div>
</template>


<script>
  export default {
    name: 'incidentmodal',
    data() {
      return {
        note: {
          flagged: ''
        }
      }
    },
    computed: {
      notes() {
        return this.$store.state.notes
      }
    },
    methods: {
      addNote() {
        this.$store.dispatch('addNote', this.note)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>