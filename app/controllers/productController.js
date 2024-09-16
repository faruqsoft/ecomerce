import {sliderListServices } from "../service/productServices.js"


export const productListByCategory = async (req,res)=>{

     let result = await listByCategoryServices(req)
     return res.json(result)

}


export const productListByRemark = async (req,res)=>{

   
     let result = await listByRemarkServices(req)
     return res.json(result)

}

  
export const productListByBrand = async (req,res)=>{

     let result = await listByBrandServices(req)
     return res.json(result)

}



export const productListBySlider = async (req,res)=>{

     let result = await sliderListServices()
     return res.json(result)

}



export const productDetailsId = async (req,res)=>{

     let result = await detailsServices(req)
     return res.json(result)

}



export const productListByKeyword = async (req,res)=>{

     

}
export const productReviewListById = async (req,res)=>{

      

}
export const createProductReview = async (req,res)=>{

   
}
