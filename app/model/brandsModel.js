// import mongoose from "mongoose";
// const dataSchema = new mongoose.Schema(
//     {
//     brandName:{type:String,required:true,unique:true},
//     brandImg:{type:String,required:true},

// },

// {
//     timestamps:true,
//     versionKey:false
// }

// )

// const brandModel = mongoose.model('brands',dataSchema); 


// module.exports = brandModel;

import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true, unique: true },
    brandImg: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const brandModel = mongoose.model('Brands', dataSchema);

export default brandModel;
