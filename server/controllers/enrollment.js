import Course from "../models/course";
import User from "../models/user";

export const enrollment = async(req, res) => {
    const {email, id} = req.body;

    try {
        const user = await User.findOne({email: email});

        if(!user) return res.status(502).json({
            message: "No user found",
        })

        const course = await Course.findById(id);

        if(!course) return res.status(503).json({
            message: "No course found",
        })

        const updatedData = await Course.findByIdAndUpdate(id, {
            $push: { enrolledStudents: user._id }
        });

        return res.status(200).json({
            message: "User enrolled successfully",
            data: updatedData
        });
    } catch (error) {
        console.log("Error in enrollment of course", error)
        return res.status(402).json({
            message: "Error in enrolling in the course", 
            error: error
        })
    }
}

export const publisher = async (req, res) => {
    const {name, publisher, description, enrollmentStatus, duration, schedule, location, pre_requisites, syllabus, students} = req.body;

    try {
        if(!name || !publisher || !description || !enrollmentStatus || !duration || !schedule || !location || !pre_requisites || !syllabus || !students) return res.status(503).json({
            message: "Please provide all the details"
        })

        const course =  await Course.create({
            name, publisher, description, enrollmentStatus, duration, schedule, location, pre_requisites, syllabus, students
        })

        return res.status(200).json({
            message: "Course published successfully",
            data: course
        })
    } catch (error) {
        console.log("Error in publishing course ", error)
        return res.status(403).json({
            message: "error in publishing course", 
            error: error
        })
    }
}