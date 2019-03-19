<template>
  <div class="eLanding">
    <h1>This is Employee Landing</h1>
  </div>
</template>

<script>
  import router from '@/router.js'
  import Dog from '@/components/EmployeeComponents/Dog.vue'
  export default {
    name: "eLanding",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      Dog
    }
  }
</script>
<style>
</style>