const db=require('../config/firebase');
module.exports.addFarmer=async function(req,res){
    try{
        const data=req.body;
        // find user from email
        const user=await db.collection('users').where('email','==',data.email).get();
        // console.log(user); 
        // get ip from user
        var ip=user.docs[0].data().ip;
        // console.log(ip);
        // add ip to data
        data.ip=ip;
        // console.log(data);
        const resp=await db.collection('rent').add(data);
        return res.status(200).json({
            message:"Data added successfully"
        });

    } 
    catch(err){
        console.log('Error',err);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
} 

module.exports.getAllFarmers=async function(req,res){
    try{
        const resp=await db.collection('rent').get();
        const data=[];
        resp.forEach((doc)=>{
            data.push({_id: doc.id,
                name:doc.data().name,
                area:doc.data().area,
                price:doc.data().price,
                loc:doc.data().loc,
                date:doc.data().date,
                duration:doc.data().duration,
                service:doc.data().service,
                ip:doc.data().ip,
            Address:doc.data().Address,
        email:doc.data().email});
        });
        return res.status(200).json({
            data:data
        });
    }
    catch(err){
        console.log('Error',err);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
}

module.exports.addProvider=async function(req,res){
    try{
        const data=req.body;
        // get user id from db by email
        const resp=await db.collection('users').where('email','==',req.body.email).get();
        const user=resp.docs[0].data();
        // console.log(user);
        // create a new array of req.body.id and update in db
        const resp1=await db.collection('users').where('email','==',req.body.cu_email).get();
        var id;
        resp1.forEach((doc)=>{
            id=doc.id;
        });
        // console.log(req.body.id);
        var arr=user.services_provided;
        if(arr==undefined){
            arr=[];
        }
        arr.push({userId:id,rentId:req.body.id});
        // console.log(req.body)
        const resp12=await db.collection('users').doc(resp.docs[0].id).update({services_provided:arr});
        return res.status(200).json({
            message:"Data added successfully"
        });


    }
    catch(err){
        console.log('Error',err);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
}