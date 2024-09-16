import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
   
        
        email:{type:String,unique:true,required:true,lowercase:true},
        otp:{type:String,required:true},
},

{
    timestamps:true,
    versionKey:false
}

)

const userModel = mongoose.model('users',dataSchema);


export default userModel;
