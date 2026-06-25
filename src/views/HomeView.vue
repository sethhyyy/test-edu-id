<template>
  <div class="about">
    <h1>Test Edu ID</h1>
    <v-btn @click="callAPI">ปุ่มทดสอบ EDU ID</v-btn>
    <v-btn @click="healthCheck">Health Check</v-btn>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'HomePage',
    mounted() {
      axios.get(`${process.env.VUE_APP_API_URL}/api/hello`)
        .then(res => res.json())
        .then(data => {
          this.message = data.message
        })
        .catch(err => console.error(err))
    },
    methods: {
      async callAPI () {
        console.log(JSON.stringify(process.env, null, 2))
        const client_id = '1'
        const redirect_uri = '1'
        const response_type = 'code'
        const scope = 'person_id passport_number prefix first_name last_name birth_date gender_id'
        window.location.href = `https://uat-edu.id.th/oauth2/v1/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`
        // await axios({
        //   method: 'GET',
        //   url: `https://uat-edu.id.th/oauth2/v1/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`,
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        // })
      },
      async healthCheck () {
      axios.get(`${process.env.VUE_APP_API_URL}/api/health`)
        .then(res => res.json())
        .then(data => {
          this.message = data.message
        })
        .catch(err => console.error(err))
      }
    }
  }
</script>
