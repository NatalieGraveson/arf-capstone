<template>
  <div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addnote">
      Add/Edit Note
    </button>
    <div class="modal fade" id="addnote" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Pet Notes</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="row" @submit.prevent='createNote()'>
              <div class="col-12">
                <h3>Pet Information</h3>
                <input class="formfield" type="text" v-model="newNote.petName" name="Name" placeholder="Name:" required>
                <br>
                <input class="formfield" type="text" v-model="newNote.behavior" name="Behavior" placeholder="Behavior:">
                <br>
                <input class="formfield" type="text" v-model="newNote.diet" name="diet" placeholder="Diet:">
                <br>
                <input class="formfield" type="text" v-model="newNote.body" name="body" placeholder="Additional Notes:">
              </div>
              <div class="col-12 mt-3">
                <button class="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>



<script>
  export default {
    name: 'AddNote',
    data() {
      return {
        newNote: {
          behavior: "",
          diet: "",
          body: "",
          petName: ""
        }
      }
    },
    computed: {
      activePet() {
        return this.$store.state.activePet
      }
    },
    methods: {
      createNote() {
        let petId = this.$store.state.activePet._id
        let petOwnerId = this.$store.state.activePet.petOwnerId
        let behavior = this.newNote.behavior
        let diet = this.newNote.diet
        let body = this.newNote.body
        let petName = this.newNote.petName
        debugger
        let payload = {
          behavior,
          diet,
          body,
          petName,
          petId,
          petOwnerId
        }

        // this.$store.dispatch('createNote', this.newNote)
        this.$store.dispatch('createNote', payload)
      }
    }
  }
</script>


<style>

</style>