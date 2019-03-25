<template>
  <div class="editowner col-12">
    <div class="modal" tabindex="-1" role="dialog" id="editowner-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Owner Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="row" @submit.prevent='editOwner()'>
              <div class="col-md-8 offset-md-1 col-10 offset-1 form-fields">
                <h3 class="text-center">Owner Information</h3>
                Name:<input class="formfielder" type="text" v-model="owner.name" name="Name" required>
                <br>
                Address:<input class="formfielder" type="text" v-model="owner.address" name="Address">
                <br>
                Phone:<input class="formfielder" type="text" v-model="owner.phone" name="Phone Number">
                <br>
                Email:<input class="formfielder" type="text" v-model="owner.email" name="Email">
                <hr>
                <h4>Emegency Contact</h4>

                Name:<input class="formfielder" type="text" v-model="owner.eContactName" name="Emergency Contact Name">
                <br>
                Number:<input class="formfielder" type="text" v-model="owner.eContactNumber"
                  name="Emergency Contact Number">
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
    <button v-if="activeOwner.name" type="button" class="btn btn-primary" data-toggle="modal"
      data-target="#editowner-modal" @click="owner=activeOwner">Edit Owner</button>

  </div>
</template>


<script>
  export default {
    name: 'editowner',
    data() {
      return {
        owner: {}
      }
    },
    computed: {
      activeOwner() {
        return this.$store.state.activeOwner
      }
    },
    methods: {
      editOwner() {
        this.$store.dispatch('editOwner', this.owner)
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

  .form-fields {
    text-align: right;
  }

  .formfielder {
    width: 175px;
    margin-top: 7px;
  }
</style>