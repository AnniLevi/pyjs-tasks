import { Fragment, useState } from "react";

import PageContent from "./PageContent";
import CurrentLocation from "./CurrentLocation";
import ChooseLocationForm from "./ChooseLocationForm";
import WeatherData from "./WeatherData";

function WeatherLayout() {
  const [currentCoords, setCurrentCoords] = useState(null);

  return (
    <Fragment>
      <PageContent title="Weather">
        <CurrentLocation
          currentCoords={currentCoords}
          setCurrentCoords={setCurrentCoords}
        />
        <ChooseLocationForm />
        <WeatherData currentCoords={currentCoords} />
      </PageContent>
    </Fragment>
  );
}

export default WeatherLayout;
