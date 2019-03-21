<template>
  <div class="addpet">
    <div class="modal" tabindex="-1" role="dialog" id="test-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Register New Pet</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="row" @submit.prevent='createPet()'>
              <div class="col-12">
                <h3>Pet Information</h3>
                <input class="formfield" type="text" v-model="newPet.name" name="Name" placeholder="Name:" required>
                <br>
                <input class="formfield" type="text" v-model="newPet.breed" name="Breed" placeholder="Breed:">
                <br>
                <input class="formfield" type="number" v-model="newPet.age" name="Age" placeholder="Age:">
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
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#test-modal">Add Pet</button>
  </div>
</template>


<script>
  export default {
    name: 'AddPet',
    data() {
      return {
        newPet: {
          name: '',
          breed: '',
          age: '',
          petOwnerId: this.$route.params.id
        }
      }
    },
    computed: {},
    methods: {
      createPet() {
        this.$store.dispatch('createPet', this.newPet)
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