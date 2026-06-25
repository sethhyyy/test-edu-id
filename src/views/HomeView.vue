<template>
  <div class="about">
    <h1>Test Edu ID</h1>
    <v-btn @click="callAPI">Test Edu ID</v-btn>
  </div>
</template>
<script>
  export default {
    name: 'HomePage',
    mounted() {
      fetch('/api/hello')
        .then(res => res.json())
        .then(data => {
          this.message = data.message
        })
        .catch(err => console.error(err))
    },
    methods: {
      callAPI () {
        fetch('/api/hello')
        .then(res => res.json())
        .then(data => {
          this.message = data.message
        })
        .catch(err => console.error(err))
      }
    }
  }
</script>
