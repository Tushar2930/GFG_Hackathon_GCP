import React, { useState } from "react";
import "./modelForm.css"; // CSS file for styling

function FertilizerForm() {
    const [cropName, setCropName] = useState("");
    const [nitrogen, setNitrogen] = useState("");
    const [phosphorus, setPhosphorus] = useState("");
    const [potassium, setPotassium] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            cropName,
            nitrogen,
            phosphorus,
            potassium,
        });
    };

    return (
        <div class="form-style-2">
            <div class="form-style-2-heading">Provide your information</div>
            <form action="" method="post" onSubmit={handleSubmit} style={{width: '100%'}}>

                <label for="field1"  style={{width: '100%'}}>
                    <span>Crop<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field1"
                        id="cropname"
                        class="input-field"
                        value={cropName}
                        onChange={(event) => setCropName(event.target.value)}
                    />
                </label>
                <label for="field2" style={{width: '100%'}}>
                    <span>Nitrogen<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field2"
                        id="nitrogen"
                        class="input-field"
                        value={nitrogen}
                        onChange={(event) => setNitrogen(event.target.value)}
                    />
                </label>
                <label for="field3"  style={{width: '100%'}}>
                    <span>Phosphorus<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field3"
                        id="phosphorus"
                        class="input-field"
                        value={phosphorus}
                        onChange={(event) => setPhosphorus(event.target.value)}
                    />
                </label>
                <label for="field4"  style={{width: '100%'}}>
                    <span>Potassium<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field4"
                        id="potassium"
                        class="input-field"
                        value={potassium}
                        onChange={(event) => setPotassium(event.target.value)}
                    />
                </label>
                <label><span> </span><input type="submit" value="Submit" /></label>
            </form>
        </div>

    );
};

export default FertilizerForm;