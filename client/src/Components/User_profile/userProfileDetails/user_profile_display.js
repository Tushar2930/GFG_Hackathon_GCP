import React from "react";
import Map from "./map/map.js";
import "./UserCard.css";

const UserCard = ({ data }) => {
  const {
    userName,
    profileData,
    address,
    accountNo,
    mobileNo,
    latlng,
    numServicesProvided,
    numOrdersReceived,
    email,
  } = data;
  // console.log(data.ip);
  return (
    <div className="profileContainer" style={{height:"150vh"}}>
      <div className="userImagelol">
        <img className=" rounded-full" src={data.ip}/>
      </div>
      <div className="user-card " style={{height:"65vh",width:"70vw",backgroundColor:"#f9f5e9"}}>
        <div className="user-card_presonaldetails flex justify-center flex-col " style={{height:"50vh"}}>
          <div className="text-5xl nuni" style={{fontWeight:"700"}}>Personal Details</div>
          <div className="flex justify-evenly flex-col" style={{height:"40vh"}}>
          <h2 className="sans"><strong className="nuni">Name : </strong>{userName}</h2>
          <p className="sans">
            <strong className="nuni">Address:</strong> {address}
          </p>
          <p className="sans">
            <strong className="nuni">Banking Details:</strong> {accountNo}
          </p>
          <p className="sans">
            <strong className="nuni">Mobile No:</strong> {mobileNo}
          </p>
          <p className="sans">
            <strong className="nuni">Number of Services Provided:</strong> {numServicesProvided}
          </p>
          <p className="sans">
            <strong className="nuni">Number of Orders Received:</strong> {numOrdersReceived}
          </p>
          <p className="sans">
            <strong className="nuni">Email:</strong> {email}
          </p>
          </div>
        </div>
      </div>
      {latlng && <Map latlng={latlng} />}
    </div>
  );
};

export default UserCard;
