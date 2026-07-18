const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },
        rollNo:{
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        department:{
            type: String,
            required:true,
        },
        year:{
            type: Number,
            required:true,
            min:1,
            max:4,
        },
        phone:{
            type:String,
        },
    },
        {
            timestamps:true,
        }
);
module.exports=mongoose.model("Student",studentSchema);