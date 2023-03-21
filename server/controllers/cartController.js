const db=require('../config/firebase')

module.exports.add=async function(req,res){
    try {
        const id=req.body.id;
        const email=req.body.email;
        const quantity=req.body.inputValue;
        // console.log(req.body);
        if(quantity>0){
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
        cartArray.push({id,quantity});
    }
    // console.log(cartArray);
 
        const docref = db.collection("users").doc(fid);
        await docref.update({ cartArray });
        
         return res.json({
            message:'success'
         })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.get=async function(req,res){
    try {
       const email=await req.body.email;
    //    console.log(req.body); 
    // console.log(email);
       const snapsh = db.collection("users");
        var ref = await snapsh.where("email", "==", `${email}`).get();
        
        var temp=ref.docs[0];
        // console.log(ref);
        var array=await temp.data().cartArray; 
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
        var kt=0;
        list.sort();
        array.sort();
        var n=array.length;
        if(array[0]!==undefined){
            list.find((e)=>{
                if(kt< n &&e._id===array[kt].id){
                    cart.push({
                        id:e._id,
                        descricption:e.descricption,
                        ip:e.ip,
                        name:e.name,
                        price:e.price,
                        quantity:array[kt].quantity
                    })
                    kt++; 
                }
            })
        }
        // console.log(cart);
        return res.json({
            message:"success",
            cart:cart
        })
    } catch (error) {
        console.log(error);
    }
}