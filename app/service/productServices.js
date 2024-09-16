import brandModel from "../model/brandsModel.js";
import categoryModel from "../model/categoriesModel.js"

export const brandListServices=async()=>{


    try{
        let data =await brandModel.find()
        return {status:"success",data:data}
    }
    catch(error){
        return {status:"fail",data:error.toString()}
    }
    
}



export const categoryListServices=async()=>{

    try{
        let data =await categoryModel.find()
        return {status:"success",data:data}
    }
    catch(error){
        return {status:"fail",data:error.toString()}
    }
    
}




export const sliderListServices=async()=>{

}


export const listByCategoryServices=async()=>{



}
export const listByRemarkServices=async()=>{



}
export const listByKeywordServices=async()=>{



}
export const detailsServices=async()=>{



}
export const reviewListServices=async()=>{



}




