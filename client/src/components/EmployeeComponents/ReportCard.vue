<template>
  <div class="row ReportCard">
    <div class="col-12">
      <form @submit.prevent='createNote()'>
        <h3>File Report</h3>
        <input class="formfield" type="text" v-model="notes.name" name="Name" placeholder="Name:">
        <br>
        <input class="formfield" type="text" v-model="notes.behavior" name="behavior" placeholder="Behavior:">
        <br>
        <input class="formfield" type="text" v-model="notes.body" name="Body" placeholder="Report:">
        <br>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'ReportCard',
    data() {
      return {
        notes: {
          name: "",
          body: "",
          behavior: "",
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
        let name = this.notes.name
        let behavior = this.notes.behavior
        let petId = this.$store.state.activePet._id
        let petOwnerId = this.$store.state.activePet.petOwnerId
        let body = this.notes.body
        let flagged = "Pet Report"
        let payload = {
          body,
          petId,
          petOwnerId,
          flagged,
          behavior,
          name
        }
        this.$store.dispatch('createNote', payload)
      },
    },
    components: {}
  }
</script>


<style scoped>

</style>