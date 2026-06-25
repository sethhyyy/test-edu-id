<template>
  <div class="about">
    <h1>Test Edu ID</h1>
    <v-btn @click="callAPI">Test Edu ID</v-btn>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'HomePage',
    mounted() {
      axios.get(`${process.env.VUE_APP_API_URL}/api/hello`)
      // fetch('https://test-edu-id-be-dz8s.vercel.app/api/hello')
        .then(res => res.json())
        .then(data => {
          this.message = data.message
        })
        .catch(err => console.error(err))
    },
    methods: {
      callAPI () {
        axios.get(`${process.env.VUE_APP_API_URL}/api/hello`)
        // fetch('https://test-edu-id-be-dz8s.vercel.app/api/hello')
        .then(res => res.json())
        .then(data => {
          this.message = data.message
        })
        .catch(err => console.error(err))
      }
    }
  }
</script>
