<template>
  <div class="row">
    <div class="col-12">
      <p>{{dogData.name}}</p>
      <img src="">
    </div>
  </div>
</template>
<script>
  export default {
    name: "dog",
    props: ["dogData"],
    mounted() {
      this.$store.dispatch('getAllPets', 'all')
    },
    data() {
      return {}
    },
    computed: {

    },
    methods: {},
    components: {}
  }
</script>
<style>

</style>