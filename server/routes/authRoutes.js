const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getAllUsers,
} = require("../controllers/authController");

// Register Route
router.post("/register", registerUser);
// Login Route
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/users", protect, getAllUsers);


module.exports = router;
