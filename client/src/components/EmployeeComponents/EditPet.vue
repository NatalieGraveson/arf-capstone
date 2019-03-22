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
                <input class="formfield" type="text" v-model="pet.name" name="Name" required>
                <br>
                <input class="formfield" type="text" v-model="pet.breed" name="Breed">
                <br>
                <input class="formfield" type="number" v-model="pet.age" name="Age">
                <br>
                <input class="formfield" type="url" v-model="pet.img" name="Img">
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
    <button v-if="activePet.name" type="button" class="btn btn-primary" data-toggle="modal" data-target="#edit-modal"
      @click="pet=activePet">Edit Pet</button>
  </div>
</template>


<script>
  export default {
    name: 'EditPet',
    data() {
      return {
        pet: {
        }
      }
    },
    computed: {
      activePet() {
        return this.$store.state.activePet
      }
    },
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