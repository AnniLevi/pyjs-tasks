import { Fragment } from "react";

import PageContent from "./PageContent";
import CurrentLocation from "./CurrentLocation";
import ChooseLocationForm from "./ChooseLocationForm";
import WeatherData from "./WeatherData";

function WeatherLayout() {
  return (
    <Fragment>
      <PageContent title="Weather">
        <CurrentLocation />
        <ChooseLocationForm />
        <WeatherData />
      </PageContent>
    </Fragment>
  );
}

export default WeatherLayout;
