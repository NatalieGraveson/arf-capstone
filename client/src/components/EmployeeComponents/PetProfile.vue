<template>
   <div class="profCard">
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
   .profCard {}
</style>