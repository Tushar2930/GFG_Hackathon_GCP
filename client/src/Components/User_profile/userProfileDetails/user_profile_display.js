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
  return (
    <div className="profileContainer">
      <div className="backgroundImage"></div>
      <div className="userImagelol"></div>
      <div className="user-card">
        <div className="user-card_presonaldetails">
          <strong> personal details</strong>
          <h2>Name:{userName}</h2>
          <p>{profileData}</p>
        </div>
        <div className="user-card__addressdetails">
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>Banking Details:</strong> {accountNo}
          </p>
          <p>
            <strong>Mobile No:</strong> {mobileNo}
          </p>
          <p>
            <strong>Number of Services Provided:</strong> {numServicesProvided}
          </p>
          <p>
            <strong>Number of Orders Received:</strong> {numOrdersReceived}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      </div>
      {latlng && <Map latlng={latlng} />}
    </div>
  );
};

export default UserCard;
