<template lang="pug">
  .balance
    
</template>

<script>
  import axios from 'axios'

  const host = 'http://18.223.199.196:8000'

  export default {
    mounted() {
      axios.get(`${host}/balance`)
    }
  }
</script>