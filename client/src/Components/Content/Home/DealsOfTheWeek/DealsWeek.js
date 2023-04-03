import React from "react";
import "./dealsweek.css";

function DealsWeek() {
  return (
    <>
      <div className="droot">
        <div>
          <h5 style={{ marginBottom: "0px",color: "orange",
    marginTop: "1rem" }}>FRESH FROM OUR FARM</h5>
        </div>
        <div>
          <h2 style={{fontSize: "xxx-large",
    margin: "1rem 0rem"}}>Deals of the Week</h2>
        </div>
        <div className="imroot">
          <div className="imgside">
            <img
              src="https://demo.fieldthemes.com/ps_organic_shop/home3/68-large_default/printed-dress.jpg"
              alt="err"
            />
          </div>
          <div className="ftext">
            <div>
              <div style={{ fontSize: "xxx-large", fontWeight: "600" }}>
                Santra
              </div>
              <div style={{ fontSize: "xx-large", fontWeight: "500" }}>
                $20.05
              </div>
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. 
            </div>
            <div className="cbtn">Add to Cart</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealsWeek;
