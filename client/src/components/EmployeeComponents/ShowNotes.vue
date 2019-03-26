<template>
  <div class="row">
    <div class="showNotes col-12">
      <div class="modal" tabindex="-1" role="dialog" id="notes-modal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="row">
              <div class="col-12">
                <h5 class="modal-header">All Notes</h5>
              </div>
              <div class="col-12" v-for="note in notes">
                <p>Behavior: {{note.behavior}}</p>
                <p>Diet: {{note.diet}}</p>
                <p>Additional notes: {{note.body}}</p>
                <hr>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="closebutton" aria-hidden="true">close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'showNotes',
    data() {
      return {}
    },
    props: [],
    computed: {
      notes() {
        return this.$store.state.notes
      },
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>
  h5 {
    font-size: 25px;
  }

  p {
    margin-top: -10px;
    font-size: 15px;
  }

  .modal-content {
    background-color: blue;
    margin-bottom: 10px;
  }

  .closebutton {
    color: white;
    cursor: pointer;
    border-style: solid;
    border-color: white;
    border-radius: 5px;
    padding: 1px 4px;
  }
</style>