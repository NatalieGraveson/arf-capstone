<template>
  <tr class="click" @click="setActiveOwner">
    <td>{{ownerData.name}} -- Current Balance : $ {{ownerData.balance}}</td>
  </tr>
</template>

<script>
  export default {
    name: "ownerbill",
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