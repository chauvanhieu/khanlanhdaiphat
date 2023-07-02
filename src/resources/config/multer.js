const multer = require("multer");

// Cấu hình multer để lưu trữ file trong thư mục 'public/images'
const storage = multer.diskStorage({
  destination: "src/public/images",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Tạo middleware multer
const upload = multer({ storage: storage });

module.exports = upload;
