import React from "react";
import GoogleMaps from "simple-react-google-maps";

function MapsGoogle({ latitude, longitude }) {
  return (
    <GoogleMaps
      apiKey={"AIzaSyDa_LoA6v5JODMOuPfOx-MTh0liE1NoObI"}
      style={{ height: "200px", width: "140%", margin: "0 20px 20px 20px" }}
      zoom={11}
      center={{ lat: latitude, lng: longitude }}
      markers={{ lat: latitude, lng: longitude }}
    />
  );
}

export default MapsGoogle;
