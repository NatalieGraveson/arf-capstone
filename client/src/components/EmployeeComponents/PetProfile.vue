<template>
   <div class="card">
      <p>{{petData.name}}</p>
   </div>
</template>

<script>
   export default {
      name: "PetProfile",
      props: ['petData'],
      data() {
         return {}
      },
      mounted() {
         if (!this.pet._id) {
            this.$store.dispatch('getActivePet', this.id)
         }
      },
      computed: {
      },
      methods: {},
      components: {
      }
   }
</script>
<style>
   .card {

      background-color: rgba(0, 0, 0, 0.267);
      border-top-color: black;
      border-right-color: black;
      border-right-style: solid;
      border-top-style: solid;
      letter-spacing: 1px;
      padding-top: 1vh;
      padding-bottom: 1vh;
      margin-top: 3vh;
      color: white;
      text-shadow: -1px -1px black;
      letter-spacing: 2px;
      align-items: center !important;
      /* max-width: 22vw;
    min-height: 18vh; */
      border-radius: 20px;
   }
</style>