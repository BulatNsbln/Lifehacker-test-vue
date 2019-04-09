<template>
  <div>
    {{msg}}
    {{id}}
  </div>
</template>

<script>
  export default {
    name: 'Article',
    data () {
      return {
        msg: 'Article'
      }
    },
    props: {
      id: String
    }
  }
</script>

<style>

</style>
