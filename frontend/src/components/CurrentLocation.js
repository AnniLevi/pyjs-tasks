import { Fragment, useEffect } from "react";

function CurrentLocation({ currentCoords, setCurrentCoords }) {
  useEffect(() => {
    function success(position) {
      const latitude = position.coords.latitude.toString();
      const longitude = position.coords.longitude.toString();
      setCurrentCoords({ latitude, longitude });
    }

    function error() {
      console.log("Unable to retrieve location");
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, [setCurrentCoords]);

  return (
    <Fragment>
      {currentCoords && (
        <p>{`Current coordinates: latitude: ${currentCoords.latitude}, longitude: ${currentCoords.longitude}`}</p>
      )}
      {!currentCoords && (
        <p style={{ color: "var(--color-red-500)" }}>
          Unable to retrieve your current location
        </p>
      )}
    </Fragment>
  );
}

export default CurrentLocation;
