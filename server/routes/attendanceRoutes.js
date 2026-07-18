const express = require("express");

const {
  getAttendance,
  updateAttendance,
  deleteAttendance,
  markOrUpdateAttendance,
} = require("../controllers/attendanceController");

const router = express.Router();

router.post("/", markOrUpdateAttendance);
router.get("/", getAttendance);
router.put("/:id", updateAttendance);
router.delete("/:id", deleteAttendance);

module.exports = router;