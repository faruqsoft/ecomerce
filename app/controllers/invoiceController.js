export const createProductReview = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}


export const readInvoiceList = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}


export const readInvoiceDetails = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}



