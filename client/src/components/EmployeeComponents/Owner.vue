<template>

  <tr class="click" @click="$router.push({name: 'Profile', params: {id:ownerData._id}})">
    <td>{{ownerData.name}}</td>
  </tr>

</template>

<script>
  export default {
    name: "ownerList",
    props: ['ownerData'],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>

<style>
  .click:hover {
    cursor: pointer;
  }
</style>