import React from "react";
import FileBase from "react-file-base64";
import "./veg_sell.css";

function Veg_sell(){

    return <div className="form_root">
      <h1>Sell Items</h1>
    <form><div className="flexb">
      <label for="item-name">Item Name:</label>
      <input type="text" id="item-name" name="item-name" required /></div>

      <div className="flexb"><label for="item-price">Item Price:</label>
      <input type="text" id="item-price" name="item-price" required /></div>

      <div className="flexb"><label for="item-image">Item Image:</label>
          {/* <input type="file" name="image" />  onDone={({base64})=>setIp(base64)}*/}
          <FileBase type="file" multiple={false} ></FileBase>
          <label>Upload the image of your item</label>
        </div>

      <button type="submit">Submit</button>
    </form>
    </div>
}

export default Veg_sell;