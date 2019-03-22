<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <img v-bind:src="dogData.img" class="card-img-top">
        <div class="card-body">
          <p class="card-text">{{dogData.name}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "dog",
    props: ["dogData"],
    mounted() {
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
<style scoped>



</style>