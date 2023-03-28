import React, { useState } from "react";
import "./modelForm.css"; // CSS file for styling

const ModelForm = () => {
    const [nitrogen, setNitrogen] = useState("");
    const [phosphorus, setPhosphorus] = useState("");
    const [potassium, setPotassium] = useState("");
    const [rainfall, setRainfall] = useState("");
    const [ph, setPh] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            nitrogen,
            phosphorus,
            potassium,
            rainfall,
            ph,
            location,
        });
    };

    return (
        <div class="form-style-2">
            <div class="form-style-2-heading">Provide your information</div>
            <form action="" method="post" onSubmit={handleSubmit} style={{width: '100%'}}>
                <label for="field1" style={{width: '100%'}}>
                    <span>Nitrogen<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field1"
                        id="nitrogen"
                        class="input-field"
                        value={nitrogen}
                        onChange={(event) => setNitrogen(event.target.value)}
                    />
                </label>
                <label for="field2"  style={{width: '100%'}}>
                    <span>Phosphorus<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field2"
                        id="phosphorus"
                        class="input-field"
                        value={phosphorus}
                        onChange={(event) => setPhosphorus(event.target.value)}
                    />
                </label>
                <label for="field3"  style={{width: '100%'}}>
                    <span>Potassium<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field3"
                        id="potassium"
                        class="input-field"
                        value={potassium}
                        onChange={(event) => setPotassium(event.target.value)}
                    />
                </label>
                <label for="field4"  style={{width: '100%'}}>
                    <span>Rainfall<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field4"
                        id="rainfall"
                        class="input-field"
                        value={rainfall}
                        onChange={(event) => setRainfall(event.target.value)}
                    />
                </label>
                <label for="field5"  style={{width: '100%'}}>
                    <span>PH<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field5"
                        id="ph"
                        class="input-field"
                        value={ph}
                        onChange={(event) => setPh(event.target.value)}
                    />
                </label>
                <label for="field6"  style={{width: '100%'}}>
                    <span>Location<span class="required">*</span></span>
                    <input
                        type="text"
                        name="field6"
                        id="location"
                        class="input-field"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </label>

                <label><span> </span><input type="submit" value="Submit" /></label>
            </form>
        </div>

    );
};

export default ModelForm;