const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../config/multer");
const { uploadPaper } = require("../controllers/paperController");

// Upload Paper Route
router.post(
  "/upload",
  protect,
  upload.single("pdfFile"),
  uploadPaper
);

module.exports = router;