import { categoryListServices  } from "../service/productServices.js";

export const categoryList = async (req,res)=>{


        let result = await categoryListServices()
        return res.json(result);
   
       
    } 