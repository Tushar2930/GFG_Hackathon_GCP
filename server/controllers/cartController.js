const db=require('../config/firebase')

module.exports.add=async function(req,res){
    try {
        const id=req.body.id;
        const email=req.body.email;
        // console.log(req.body);
        const snapsh = db.collection("users");
        var ref = await snapsh.where("email", "==", `${email}`).get();
        var fid;
        var cartArray=[];
        ref.forEach((doc)=>{
            fid=(doc.id)
            cartArray=doc.data().cartArray;
        }) 
        if(cartArray===undefined){
            cartArray=[];
        }
        if(cartArray.find((uid)=>{return uid===id})===undefined){
            // console.log(cartArray.find((uid)=>{return uid===id}));
        cartArray.push(id);
    }
    // console.log(cartArray);
 
        const docref = db.collection("users").doc(fid);
        await docref.update({ cartArray });
        
         return res.json({
            message:'success'
         })
    } catch (error) {
        console.log(error);
    }
}

module.exports.get=async function(req,res){
    try {
       const email=req.body.email;
       const snapsh = db.collection("users");
        var ref = await snapsh.where("email", "==", `${email}`).get();
        
        var temp=ref.docs[0];
        var array=await temp.data().cartArray; 
        // console.log(array);
        const collectio = db.collection("products");
        const data = await collectio.get();
        var list=[];
        data.forEach((doc) => {
          list.push({ _id: doc.id, descricption: doc.data().descricption,
          ip: doc.data().ip,
          name: doc.data().name,
          price: doc.data().price,
          quantity: doc.data().quantity });
        });
        var cart=[];
        var k=0;
        if(array[0]!==undefined){
            list.find((e)=>{
                if(e._id===array[k]){
                    cart.push({
                        id:e._id,
                        descricption:e.descricption,
                        ip:e.ip,
                        name:e.name,
                        price:e.price
                    })
                    k++;
                }
            })
        }
       return res.json({
        message:"success",
        cart:cart
       })
    } catch (error) {
        console.log(error);
    }
}