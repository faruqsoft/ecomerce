



export const login = async (req,res)=>{

    try {


        return res.json({status:"success","message" : "user login successful"});

    
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }
}





export const verifyLogin = async (req,res)=>{
    
try{

   
    return res.json({status:"success","message":"user frofile successfully",data:data});

}
catch(e){
    return res.json({status:"fail","message":e.toString()});

}

}




export const createUserProfile= async (req,res)=>{
    try {


       

        return res.json({status:"success","message" : "user update successfully"});
    
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }
  

}




export const updateUserProfile = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}








export const readUserProfile = async (req,res)=>{

    return res.json({status:"success"});


}



















