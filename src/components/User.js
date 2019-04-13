import React from 'react';
import "./User.css";

export default function User({details}) {
  
  return (
    <div className="user">
      <h1>{details.name}</h1>
      <h2><i className="fas fa-user-alt"></i>{details.username}</h2>
      <ul>
        <li><i className="fas fa-envelope"></i>{details.email}</li>
        <li><i className="fas fa-location-arrow"></i>
          {details.address.street},{" "}
          {details.address.suite},{" "} 
          {details.address.city},{" "} 
          {details.address.zipcode}
        </li>
        <li><i className="fas fa-map-marker-alt"></i>Lat: {details.address.geo.lat},{" "}Lng: {details.address.geo.lng}</li>
        <li><i className="fas fa-mobile-alt"></i>{details.phone}</li>
        <li><i className="fas fa-globe"></i>{details.website}</li>
        <li><i className="far fa-building"></i>
            <ul>
              <li><h4>{details.company.name}</h4></li>
              <li>{details.company.catchPhrase} </li>
              <li>{details.company.bs} </li>
            </ul>
        </li>

      </ul>
     
      
    </div>
  )
}
