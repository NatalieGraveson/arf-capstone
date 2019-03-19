<template>
  <div class="dog row">
    <div class="col-6"><br>
      <h4>SEARCH BAR HERE</h4>
    </div>
    <div class="col-6"><br>
      <h4>SORT BY: All / CHECKED IN</h4>
    </div>
    <div class="col-12">
      <div class="row d-flex justify-content-around ">
        <!-- <div class="col-md-3 col-sm-6 dogcard" v-for="dog in dogs"></div> -->
        <div class="col-md-3 col-6 dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
        <div class="col-md-3 col-6  dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
        <div class="col-md-3 col-6  dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
        <div class="col-md-3 col-6  dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
        <div class="col-md-3 col-6  dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
        <div class="col-md-3 col-6  dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
        <div class="col-md-3 col-6  dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
        <div class="col-md-3 col-6  dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
        <div class="col-md-3 col-6  dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
        <div class="col-md-3 col-6  dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
        <div class="col-md-3 col-6  dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
        <div class="col-md-3 col-6  dogcard"> DOG NAME <br> <img src="http://placehold.it/100x100" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dog",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>
<style>
  .dogcard {
    /* background-image: url('https://vignette.wikia.nocookie.net/edwikia/images/0/0d/Plank.png/revision/latest/scale-to-width-down/338?cb=20170726093347'); */
    /* background-repeat: no-repeat; */
    /* background-size: 400px 150px; */
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