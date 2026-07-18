const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAttendance,
  updateAttendance,
  deleteAttendance,
  markOrUpdateAttendance,
} = require("../controllers/attendanceController");

const router = express.Router();

router.post("/", authMiddleware, markOrUpdateAttendance);
router.get("/", authMiddleware, getAttendance);
router.put("/:id", authMiddleware, updateAttendance);
router.delete("/:id", authMiddleware, deleteAttendance);

module.exports = router;