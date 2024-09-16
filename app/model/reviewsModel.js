import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
   
        userId:{type:mongoose.Schema.Types.ObjectId,required:true},
        productId:{type:mongoose.Schema.Types.ObjectId,required:true},
      
        des:{type:String,required:true},
        rating:{type:String,required:true}
        
       
       
},

{
    timestamps:true,
    versionKey:false
}

)

const reviewtModel = mongoose.model('  ',dataSchema);



export default reviewtModel;