export const brandList = async (req,res)=>{

    try{
      
        return res.json({ status:"successs","message":""})
   
    }
    catch(e){

        return res.json({status:"fail","message":e.toString()});
    }   

}
