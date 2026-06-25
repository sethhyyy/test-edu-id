<template>
  <div class="callback-wrapper">
    <div class="loading-box">
      <div class="spinner"></div>
      <h2 class="mt-6">
        กำลังตรวจสอบข้อมูลตัวตน...
      </h2>
      <p class="mt-2 grey--text">
        กรุณารอสักครู่ ระบบกำลังเชื่อมต่อกับ EDU ID
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'EduIdRedirect',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>
.callback-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #f5f5f5;
}

.spinner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #41B0C5;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 1s linear infinite;
  margin: 0 auto 24px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-box {
  text-align: center;
  background: white;
  border-radius: 16px;
  padding: 40px 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.loading-box h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-top: 24px !important;
}

.loading-box p {
  font-size: 0.95rem;
  color: #757575;
  margin-top: 8px !important;
}

/* Mobile Responsive */
@media (max-width: 480px) {
  .callback-wrapper {
    padding: 16px;
  }

  .loading-box {
    padding: 32px 20px;
    border-radius: 12px;
  }

  .loading-box h2 {
    font-size: 1.1rem;
    margin-top: 20px !important;
  }

  .loading-box p {
    font-size: 0.875rem;
    margin-top: 6px !important;
  }
}

@media (max-width: 360px) {
  .loading-box {
    padding: 24px 16px;
  }

  .loading-box h2 {
    font-size: 1rem;
  }

  .loading-box p {
    font-size: 0.8rem;
  }
}
</style>
