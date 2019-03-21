<template>
  <div class="">
    <h1 class="">This is owners
    </h1>
  </div>
</template>

<script>
  import router from '@/router.js'

  export default {
    name: "",
    props: [],
    mounted() {
      this.$store.dispatch("getOwners")
    },
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>
<style>

</style>