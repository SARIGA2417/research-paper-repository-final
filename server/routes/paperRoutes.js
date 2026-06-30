const express = require("express");
const router = express.Router();

const adminOnly = require("../middleware/adminMiddleware");
const protect = require("../middleware/authMiddleware");
const upload = require("../config/multer");

const {
  uploadPaper,
  getAllPapers,
  getHomeData,
  getPaperById,
  getMyPapers,
  updatePaper,
  deletePaper,
  downloadPaper,
  savePaper,
  getSavedPapers,
  removeSavedPaper,
  getDownloadedPapers,
  addDownloadedPaper,
  getAllPapersAdmin,
  approvePaper,
  rejectPaper,
  getDashboardStats,
} = require("../controllers/paperController");

// Upload Paper
router.post(
  "/upload",
  protect,
  upload.single("pdfFile"),
  uploadPaper
);

// Save Paper
router.post("/save/:id", protect, savePaper);

router.get("/home/data", getHomeData);

// General Routes
router.get("/", getAllPapers);
router.get("/mypapers", protect, getMyPapers);
router.get("/saved", protect, getSavedPapers);
router.get("/downloads", protect, getDownloadedPapers);
router.get("/download/:id", downloadPaper);

// Admin Routes
router.get(
  "/admin/all",
  protect,
  adminOnly,
  getAllPapersAdmin
);

router.get(
  "/admin/dashboard",
  protect,
  adminOnly,
  getDashboardStats
);

router.put(
  "/admin/approve/:id",
  protect,
  adminOnly,
  approvePaper
);

router.put(
  "/admin/reject/:id",
  protect,
  adminOnly,
  rejectPaper
);

// Download History
router.post(
  "/download/save/:id",
  protect,
  addDownloadedPaper
);

// Update & Delete
router.put("/:id", protect, updatePaper);
router.delete("/:id", protect, deletePaper);

// Remove Saved Paper
router.delete("/save/:id", protect, removeSavedPaper);


// Keep LAST
router.get("/:id", getPaperById);

module.exports = router;