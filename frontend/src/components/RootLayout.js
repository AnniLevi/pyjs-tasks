import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

function RootLayout() {
  return (
    <Fragment>
      <Navigation />
      <Outlet />
    </Fragment>
  );
}

export default RootLayout;
