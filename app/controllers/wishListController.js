export const createWish = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}


export const readWish = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}



export const removeWish = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}

