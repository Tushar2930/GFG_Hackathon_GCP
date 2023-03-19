import React from "react";
import FileBase from "react-file-base64";
import "./veg_sell.css";

function Veg_sell(){

  const [name,setName]=React.useState("");
  const [price,setPrice]=React.useState("");
  const [quantity,setQuantity]=React.useState("");
  const [ip,setIp]=React.useState("");
  const [descricption,setDescricption]=React.useState("");


  const handleSubmit=async (e)=>{
    e.preventDefault();
    const resp=await fetch('http://localhost:8000/product/sell-add',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        price,
        quantity,
        ip,
        descricption
      })
    })
  }

    return <div className="form_root">
      <h1>Sell Items</h1>
    <form onSubmit={handleSubmit}><div className="flexb">
      <label for="item-name">Item Name:</label>
      <input type="text" id="item-name" name="item-name" required onChange={(e)=>setName(e.target.value)} /></div>

      <div className="flexb"><label for="item-price">Item Price:</label>
      <input type="text" id="item-price" name="item-price" required onChange={(e)=>setPrice(e.target.value)}/></div>
      <div className="flexb"><label for="item-quantity">Item Quantity:</label>
      <input type="number" id="item-quantity" name="item-quantity" required onChange={(e)=>setQuantity(e.target.value)}/></div>

      <div className="flexb"><label for="item-image">Item Image:</label>
           <FileBase type="file" multiple={false} onDone={({base64})=>setIp(base64)}></FileBase>
        </div>
        <div className="flexb"><label for="item-desc">Item Descricption:</label>
      <input type="text" id="item-desc" name="item-desc" required onChange={(e)=>setDescricption(e.target.value)}/></div>

      <button type="submit">Submit</button>
    </form>
    </div>
}

export default Veg_sell;