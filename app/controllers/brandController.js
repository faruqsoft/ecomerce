import { brandListServices  } from "../service/productServices.js";

export const brandList = async (req,res)=>{


        let result = await brandListServices()
        return res.json(result);
   
       
    }   


