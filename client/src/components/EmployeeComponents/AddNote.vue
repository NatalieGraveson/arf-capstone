<template>
  <div>
    <form class="row" @submit.prevent='createNote()'>
      <div class="col-12">
        <h3>Pet Information</h3>
        <input class="formfield" type="text" v-model="notes.petName" name="Name" placeholder="Name:" required>
        <br>
        <input class="formfield" type="text" v-model="notes.behavior" name="Behavior" placeholder="Behavior:">
        <br>
        <input class="formfield" type="text" v-model="notes.diet" name="diet" placeholder="Diet:">
        <br>
        <input class="formfield" type="text" v-model="notes.body" name="body" placeholder="Additional Notes:">
      </div>
      <div class="col-12 mt-3">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
    <show-notes></show-notes>
  </div>

</template>



<script>
  import ShowNotes from '@/components/EmployeeComponents/ShowNotes.vue'
  export default {
    name: 'AddNote',
    data() {
      return {
        notes: {
          behavior: "",
          diet: "",
          body: "",
          petName: "",
          id: ""
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
        let behavior = this.notes.behavior
        let diet = this.notes.diet
        let body = this.notes.body
        let petName = this.notes.petName
        debugger
        let payload = {
          behavior,
          diet,
          body,
          petName,
          petId,
          petOwnerId,
        }

        // this.$store.dispatch('createNote', this.newNote)
        this.$store.dispatch('createNote', payload)
      }
    },
    components: {
      ShowNotes
    }
  }
</script>


<style>

</style>