<template>
  <div class="col-12 col-md-3 mb-3 petcards d-flex justify-content-center card-group click">
    <div @click="$router.push({name: 'Profile', params: {id:dogData.petOwnerId}})" class="">
      <img v-bind:src="dogImg" class="card-img-top">
      <div class="card-body">
        <hr>
        <h3 class="card-text">{{dogData.name}}</h3>
        <h6>Checked In: {{dogData.checkedIn}}</h6>
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
        return this.dogData.img || "../assets/dogholder.png"
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
    background-color: rgba(0, 0, 0, 0.11);
    border-radius: 20px;
    border-style: solid;

  }

  .card-img-top {
    max-height: 30vh;
    min-height: 30vh;
    min-width: 100%;
    border-radius: 20px;
    margin-top: 10px;
  }

  .click:hover {
    cursor: pointer;
  }

  img {
    border-style: dashed;
    border-color: black;
  }
</style>