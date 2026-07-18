const Attendance = require("../models/Attendance");

const markAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);

    res.status(201).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate("student");

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Attendance Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const markOrUpdateAttendance = async (req, res) => {
  try {
    const { student, date, status } = req.body;

    let attendance = await Attendance.findOne({ student, date });

    if (attendance) {
      attendance.status = status;
      await attendance.save();
    } else {
      attendance = await Attendance.create({
        student,
        date,
        status,
      });
    }

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAttendance,
  updateAttendance,
  deleteAttendance,
  markOrUpdateAttendance,
};