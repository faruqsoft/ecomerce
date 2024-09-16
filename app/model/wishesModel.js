import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
   
        productId:{type:mongoose.Schema.Types.ObjectId,required:true},
        userId:{type:mongoose.Schema.Types.ObjectId,required:true}

       
},

{
    timestamps:true,
    versionKey:false
}

)

const wishModel = mongoose.model('wishes',dataSchema);


export default wishModel;