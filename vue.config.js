module.exports = {
  // ใช้ตอน dev local เท่านั้น เพื่อให้เรียก /api/* แล้ว forward ไปที่ backend
  // ตอน build production จะไม่มีผล (frontend/backend คนละ domain แล้ว)
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },

  // ปิด source map ตอน production เพื่อลดขนาด build (ไม่บังคับ, ลบออกได้ถ้าต้องการ debug)
  productionSourceMap: false,
};
