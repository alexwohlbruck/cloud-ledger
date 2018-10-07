<template lang="pug">
  .register
    p(v-for='datum in data') {{datum}}
    
</template>

<script>
  import axios from 'axios'

  const host = 'http://18.223.199.196:8000'

  export default {
    data: () => ({
        data: null
    }),
    mounted() {
      axios.get(`${host}/register`).then(res => {
          console.log(res)
          this.data = res.data
      })
    }
  }
</script>