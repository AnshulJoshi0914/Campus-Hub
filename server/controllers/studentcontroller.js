const Student = require("../models/Students");

// Create Student
const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json({
            success: true,
            message: "Student added successfully",
            data: student,
        });

    } catch (error) {
        console.error("🔥 Error Creating Student:");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Students
const getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json({
            success: true,
            count: students.length,
            data: students,
        });

    } catch (error) {
        console.error("🔥 Error Fetching Students:");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get Student By ID
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            data: student,
        });

    } catch (error) {
        console.error("🔥 Error Fetching Student:");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Update Student
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student,
        });

    } catch (error) {
        console.error("🔥 Error Updating Student:");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Student
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
        });

    } catch (error) {
        console.error("🔥 Error Deleting Student:");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};