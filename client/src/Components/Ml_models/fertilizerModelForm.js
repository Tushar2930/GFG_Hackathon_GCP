import React, { useState } from "react";
import "./modelForm.css"; // CSS file for styling

function FertilizerForm() {
    const [cropName, setCropName] = useState("");
    const [nitrogen, setNitrogen] = useState(0);
    const [phosphorus, setPhosphorus] = useState(0);
    const [potassium, setPotassium] = useState(0);
    const [prediction, setPrediction] = useState("");

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            
        const values=[cropName,nitrogen,phosphorus,potassium];
        console.log(values)
        const response = await fetch("http://tushar7.pythonanywhere.com/fertilizer-predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    values,
                }),
            });
            const data = await response.json();
            setPrediction(data.recommendation)
        
        } catch (error) {
            console.log(error)
        }
        

    };
 
    return (
        <div class="form-style-2" style={{backgroundColor:"white"}}>
            <div class="form-style-2-heading pb-3">Provide your information</div>
            <form action="" method="post" onSubmit={handleSubmit} style={{width: '100%'}}>

                <label for="field1"  style={{width: '100%'}}>
                    <span>Crop<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field1"
                        id="cropname"
                        class="input-field"
                        onChange={(event) => setCropName(event.target.value)}
                    />
                </label>
                <label for="field2" style={{width: '100%'}}>
                    <span>Nitrogen<span class="required">*</span></span>
                    <input
                        type="number"
                        name="field2"
                        id="nitrogen"
                        class="input-field"   
                        onChange={(event) => setNitrogen(event.target.value)}
                    />
                </label>
                <label for="field3"  style={{width: '100%'}}>
                    <span>Phosphorus<span class="required">*</span></span>
                    <input
                        type="number"
                        name="field3"
                        id="phosphorus"
                        class="input-field"
                        onChange={(event) => setPhosphorus(event.target.value)}
                    />
                </label>
                <label for="field4"  style={{width: '100%'}}>
                    <span>Potassium<span class="required">*</span></span>
                    <input
                        type="number"
                        name="field4"
                        id="potassium"
                        class="input-field"
                        onChange={(event) => setPotassium(event.target.value)}
                    />
                </label>
                <label><span> </span><input type="submit" value="Submit" /></label>
            </form>
            <div>{prediction}</div>
        </div>

    );
};

export default FertilizerForm;