import React from "react";
import PropTypes from "prop-types";
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

MapsGoogle.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default MapsGoogle;
