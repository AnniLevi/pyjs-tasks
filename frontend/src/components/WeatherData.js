import { useActionData, useNavigation, useSubmit } from "react-router-dom";
import { Fragment, useEffect } from "react";

import LoadingSpinner from "./LoadingSpinner";

function WeatherData({ currentCoords }) {
  const navigation = useNavigation();
  const submit = useSubmit();
  let data = useActionData();

  useEffect(() => {
    if (!data && currentCoords) {
      submit({ country: JSON.stringify(currentCoords) }, { method: "POST" });
    }
  }, [currentCoords, data, submit]);

  let content;

  if (data) {
    content = (
      <Fragment>
        <h3 style={{ textAlign: "left" }}>Current Weather Data</h3>
        <p>Selected location: {data.name}</p>
        <p>Temperature: {data.main.temp}</p>
        <p>Temperature min: {data.main.temp_min}</p>
        <p>Temperature max: {data.main.temp_max}</p>
        <p>Feels like: {data.main.feels_like}</p>
        <p>Pressure: {data.main.pressure}</p>
        <p>Wind speed: {data.wind.speed}</p>
        <p>
          Weather Overall: {data.weather[0].main} ({data.weather[0].description}
          )
        </p>
      </Fragment>
    );
  }

  if (navigation.state !== "idle") {
    content = <LoadingSpinner />;
  }

  return content;
}

export default WeatherData;
