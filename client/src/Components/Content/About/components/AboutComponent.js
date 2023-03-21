import React from "react";
import "./AboutComponent.css"
import AboutCard from "./AboutCard";

var aboutDataArray = [
    {name:"Sumit", contact_num:"696969", description:"Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.", img_url:"https://glamournepal.com/wp-content/uploads/2023/01/Rocky-Bhai-Yash.jpg"},
    {name:"Tushar", contact_num:"696969", description:"Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta.", img_url:"https://glamournepal.com/wp-content/uploads/2023/01/Rocky-Bhai-Yash.jpg"},
    {name:"Tanmay", contact_num:"696969", description:"Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta.", img_url:"https://glamournepal.com/wp-content/uploads/2023/01/Rocky-Bhai-Yash.jpg"},
    {name:"Aryan", contact_num:"696969", description:"Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.", img_url:"https://glamournepal.com/wp-content/uploads/2023/01/Rocky-Bhai-Yash.jpg"},
]

function AboutComponent(){
    var aboutCardArray = aboutDataArray.map(
        (item) => {
            return <div class="col-3"><AboutCard name={item.name} contact_num={item.contact_num} description={item.description} img_url={item.img_url}/></div>;
        }
    )

    return (
        <div class="my-3">
            <div class="row">
                <h2 class="text-center">Contact Our Team</h2>
            </div>
            <div class="row">
                {aboutCardArray}
            </div>
        </div>
    )
}

export default AboutComponent;