import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
   
        userId:{type:mongoose.Schema.Types.ObjectId,required:true},
        productId:{type:mongoose.Schema.Types.ObjectId,required:true},
        invoiceId:{type:mongoose.Schema.Types.ObjectId,required:true},


        payable:{type:String,required:true},
        cus_details:{type:String,required:true},
        ship_details:{type:String,required:true},
        tran_id:{type:String,required:true},
        qty:{type:String,required:true},
        price:{type:String,required:true},
        color:{type:String,required:true},
        size:{type:String,required:true}
        
       
       
},

{
    timestamps:true,
    versionKey:false
}

)

const invoiceProductModel = mongoose.model('invoiceProducts',dataSchema);

export default invoiceProductModel;