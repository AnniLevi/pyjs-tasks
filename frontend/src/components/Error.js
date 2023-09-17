import { Fragment } from "react";
import { useRouteError } from "react-router-dom";

import Navigation from "../components/Navigation";
import PageContent from "./PageContent";

function Error() {
  const error = useRouteError();

  const title = `Error ${error.status}`;
  const message = error.data?.message || "Something went wrong";

  return (
    <Fragment>
      <Navigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
}

export default Error;
