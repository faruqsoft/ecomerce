import brandModel from "../model/brandsModel.js";
import categoryModel from "../model/categoriesModel.js"
import productSliderModel from "../model/slidersModel.js";

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

    try{
        let data =await productSliderModel.find()
        return {status:"success",data:data}
    }
    catch(error){
        return {status:"fail",data:error.toString()}
    }
    
}


export const listByBrandServices=async(req)=>{

  try {

    let brandId = new objectId(req.params.brandId);
    let matchStage = {$match:{brandId:brandId}}

    let joinWithbrandStage = {$lookup:{from:"brands",localField:"brandId",foreignField:"_id",as:"brand"}};
    let joinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryId",foreignField:"_id",as:"category"}};

    let unwindBrandStage = {$unwind:"$brand"}
    let unwindCategoryStage = {$unwind :"$category"}

    let projectionStage={$project:{'brand._id':0,'category._id':0,'categoryId':0,'brandId':0}}

    //Query
    let data = await productSliderModel.aggregate([
        matchStage,
        joinWithbrandStage,
        joinWithCategoryStage,
        unwindBrandStage,
        unwindCategoryStage,
        projectionStage

    ])
    return {status:"success",data:data}

  }catch(error){

    return {status:"fail",data:error.toString()};
  }

}
 
export const listByCategoryServices=async(req)=>{
    try {
        
    let categoryId = new objectId(req.params.categoryId);
    let matchStage = {$match:{categoryId:categoryId}}

    let joinWithbrandStage = {$lookup:{from:"brands",localField:"brandId",foreignField:"_id",as:"brand"}};
    let joinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryId",foreignField:"_id",as:"category"}};

    
    let unwindBrandStage = {$unwind:"$brand"}
    let unwindCategoryStage = {$unwind :"$category"}

    let projectionStage={$project:{'brand._id':0,'category._id':0,'categoryId':0,'brandId':0}}

    //Query
    let data = await productSliderModel.aggregate([
        matchStage,
        joinWithbrandStage,
        joinWithCategoryStage,
        unwindBrandStage,
        unwindCategoryStage,
        projectionStage

    ])

    return {status:"success",data:data}

    }
    catch(error){

        return {status:"fail",data:error.toString()};
      }
    



}
export const listByRemarkServices=async(req)=>{

    try{
        let remark = new req.params.remark;
    let matchStage = {$match:{remark:remark}}

    let joinWithbrandStage = {$lookup:{from:"brands",localField:"brandId",foreignField:"_id",as:"brand"}};
    let joinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryId",foreignField:"_id",as:"category"}};

    
    let unwindBrandStage = {$unwind:"$brand"}
    let unwindCategoryStage = {$unwind :"$category"}

    let projectionStage={$project:{'brand._id':0,'category._id':0,'categoryId':0,'brandId':0}}

    //Query
    let data = await productSliderModel.aggregate([
        matchStage,
        joinWithbrandStage,
        joinWithCategoryStage,
        unwindBrandStage,
        unwindCategoryStage,
        projectionStage

    ])

    return {status:"success",data:data}


    }
    catch(error){

        return {status:"fail",data:error.toString()};
      }
    


}
export const detailsServices=async(req)=>{

   try{
    let productId = new objectId(req.params.productId);
    let matchStage = {$match:{_id:productId}}

    let joinWithbrandStage = {$lookup:{from:"brands",localField:"brandId",foreignField:"_id",as:"brand"}};
    let joinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryId",foreignField:"_id",as:"category"}};
    let joinWithDetailsStage ={$lookup:{from:"productDetails",localField:"categoryId",productId:"_id",as:"details"}};

    let unwindBrandStage = {$unwind:"$brand"}
    let unwindCategoryStage = {$unwind :"$category"}
    let unwindDetailsStage = {$unwind :"$details"}

    let projectionStage={$project:{'brand._id':0,'category._id':0,'categoryId':0,'brandId':0}}


     //Query
     let data = await productModel.aggregate([
        matchStage,
        joinWithbrandStage,
        joinWithCategoryStage,
        unwindBrandStage,
        unwindCategoryStage,
        projectionStage

    ])

    return {status:"success",data:data}

   }
   catch(error){

    return {status:"fail",data:error.toString()};
  }


}


export const listByKeywordServices=async()=>{



}

export const reviewListServices=async()=>{



}




