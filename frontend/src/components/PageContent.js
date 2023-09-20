import { Fragment } from "react";

import classes from "./PageContent.module.css";

function PageContent({ title, children }) {
  return (
    <Fragment>
      <h1>{title}</h1>
      <div className={classes.content}>{children}</div>
    </Fragment>
  );
}

export default PageContent;
