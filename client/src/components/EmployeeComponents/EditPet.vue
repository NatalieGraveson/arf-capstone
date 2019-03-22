<template>
  <div class="editpet">
    <div class="modal" tabindex="-1" role="dialog" id="edit-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Pet Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="row" @submit.prevent='editPet()'>
              <div class="col-12">
                <h3>Pet Information</h3>
                <input class="formfield" type="text" v-model="editPet.name" name="Name" required>
                <br>
                <input class="formfield" type="text" v-model="editPet.breed" name="Breed" placeholder="Breed:">
                <br>
                <input class="formfield" type="number" v-model="editPet.age" name="Age" placeholder="Age:">
                <br>
                <input class="formfield" type="url" v-model="editPet.img" name="Age" placeholder="Img:">
              </div>
              <div class="col-12 mt-3">
                <button class="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#edit-modal"
      @click="editPet=activePet">Edit Pet</button>
  </div>
</template>


<script>
  export default {
    name: 'EditPet',
    data() {
      return {
        editPet: {
          name: this.$store.state.activePet.name,
          breed: this.$store.state.activePet.breed,
          age: this.$store.state.activePet.age,
          petOwnerId: this.$route.params.id,
          img: this.$store.state.activePet.img,
        }
      }
    },
    computed: {},
    methods: {
      editPet() {
        this.$store.dispatch('editPet', this.newPet)
      }
    },
    components: {}
  }
</script>


<style scoped>
  .modal {
    background-color: rgba(0, 0, 0, 0.322);
  }

  .modal-content {
    background-color: rgb(4, 4, 136);
    border-radius: 20px;
  }
</style>