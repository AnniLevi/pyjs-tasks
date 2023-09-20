import { Fragment, useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

import styles from "./ChooseLocationForm.module.css";

function ChooseLocationForm() {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedState, setSelectedState] = useState({});
  const [selectedCity, setSelectedCity] = useState({});

  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const countries = Country.getAllCountries();

  const countryOptions = countries.map((country) => ({
    label: `${country.flag} ${country.name}`,
    code: country.isoCode,
    value: JSON.stringify({
      latitude: country.latitude,
      longitude: country.longitude,
    }),
  }));

  useEffect(() => {
    if (selectedCountry) {
      const options = State.getStatesOfCountry(selectedCountry.code).map(
        (state) => ({
          label: state.name,
          code: state.isoCode,
          value: JSON.stringify({
            latitude: state.latitude,
            longitude: state.longitude,
          }),
        }),
      );
      setStateOptions(options);
    }

    if (selectedCountry && selectedState) {
      const options = City.getCitiesOfState(
        selectedCountry.code,
        selectedState.code,
      ).map((city) => ({
        label: city.name,
        value: JSON.stringify({
          latitude: city.latitude,
          longitude: city.longitude,
        }),
      }));
      setCityOptions(options);
    }
  }, [selectedCountry, selectedState, selectedCity]);

  return (
    <Fragment>
      <div>Choose Location Manually</div>
      <Form method="POST" className={styles.locationForm}>
        <Select
          className={styles.locationSelect}
          id="country"
          name="country"
          placeholder="Select country..."
          options={countryOptions}
          onChange={setSelectedCountry}
        />
        <Select
          className={styles.locationSelect}
          id="state"
          name="state"
          placeholder="Select state..."
          options={stateOptions}
          onChange={setSelectedState}
        />
        <Select
          className={styles.locationSelect}
          id="city"
          name="city"
          options={cityOptions}
          placeholder="Select city..."
          onChange={setSelectedCity}
        />
        <div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </Fragment>
  );
}

export default ChooseLocationForm;
