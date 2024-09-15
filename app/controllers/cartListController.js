export const createCart = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}


export const readCartList = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}


export const updateCart = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}

export const removeCart = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}