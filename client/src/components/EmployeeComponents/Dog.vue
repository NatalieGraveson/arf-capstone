<template>
  <div class="col-12 col-md-3 mb-3 petcards d-flex justify-content-center card-group click">
    <div @click="$router.push({name: 'Profile', params: {id:dogData.petOwnerId}})"
      class="card border border-light bg-transparent w-100">
      <img v-bind:src="dogImg" class="card-img-top">
      <div class="card-body">
        <p class="card-text">{{dogData.name}}
        </p>
        <p>Checked In: {{dogData.checkedIn}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "dog",
    props: ["dogData", "ownerData"],
    mounted(

    ) {
    },
    data() {
      return {}
    },
    computed: {
      dogImg() {
        return this.dogData.img || "//placehold.it/200x200/"
      }
    },
    methods: {},
    components: {}
  }
</script>
<style scoped>
  .petcards {
    flex-direction: row;
    color: white;
    text-shadow: 1px 2px black;

  }

  .card-img-top {
    min-height: 38vh;
  }

  .click:hover {
    cursor: pointer;
  }
</style>