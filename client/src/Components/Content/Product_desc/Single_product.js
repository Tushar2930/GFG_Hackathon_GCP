import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { AuthContext } from "../context/AuthorizationContext";
import "./single_product.css";

function SingleProduct(){

    const {id}=useParams();
    const [data,setData]=React.useState({});
    const [temp,setTemp]=useState(1);
    const useAuth = React.useContext(AuthContext);

    useEffect(() => {
        async function fet(){
            const resp=await fetch(`http://localhost:8000/product/get-product/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data1=await resp.json();
            setData(data1.product);
            // console.log(data1);
            setTemp(data1.product.minQuantity);
        }
        fet();
    }, [id]);
   
    const addToCart=async()=>{
        const resp=await fetch("http://localhost:8000/cart/add-product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                name:`${data.category} ${data.product} ${data.species}`,
                price:data.price,
                email: useAuth.currentUser.email,
                minQuantity:data.minQuantity,
                maxQuantity:data.maxQuantity,
                quantity:temp,
            }),
        });
        const data2=await resp.json();
        if(data2.message==="success"){
            alert("Product added to cart");
            window.location.href="/cart";
        }
        else if(data2.message==="already added"){
            alert("Product already present in cart");
            window.location.href="/cart";

        }
    }
    
    return <>
        <div className="container cont-help" style={{backgroundColor: "#efefef"}}>
            <div className="row" style={{padding: "2rem"}}>
                <div className="col-6" style={{padding: "3rem"}}>
                <img src={data.ip} alt="product" className="img-fluid"/>
                </div>
                <div className="col-6" style={{margin: "4rem 0rem"}}>
                    <h1>{data.category} {data.product} {data.species}</h1>
                    <h3>Price : {data.price}</h3>
                    <h3>{data.quantity}</h3>
                    <div className="flexi">
                    <div onClick={(e)=>setTemp(temp-1)}><RemoveIcon/></div>
                    <div>{temp}</div>
                    <div onClick={(e)=>setTemp(temp+1)}><AddIcon/></div>
                    </div>
                    <button className="btn btn-dark" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>

            <div>
                <h3>About the Product</h3>
                <p>{data.description}</p>
            </div>
        </div>

    </>
}

export default SingleProduct;
