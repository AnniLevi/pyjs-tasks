import { Fragment, useState, useEffect } from "react";

function CurrentLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    function success(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }

    function error() {
      console.log("Unable to retrieve location");
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, [latitude, longitude]);

  return (
    <Fragment>
      {latitude && longitude && (
        <p>{`Latitude: ${latitude}, Longitude: ${longitude}`}</p>
      )}
      {(!latitude || !longitude) && (
        <p style={{ color: "var(--color-red-500)" }}>
          Unable to retrieve your current location
        </p>
      )}
    </Fragment>
  );
}

export default CurrentLocation;
