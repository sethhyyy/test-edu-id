<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  export default {
    mounted() {
      fetch('/api/hello')
        .then(res => res.json())
        .then(data => {
          this.message = data.message
        })
        .catch(err => console.error(err))
    }
  }
</script>
