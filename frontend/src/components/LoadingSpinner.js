import { Fragment } from "react";

import Timer from "./Timer";
import styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <Fragment>
      <div className={styles.loader}></div>
      <div className={styles.loadingInfo}>
        Loading...
        <Timer />
      </div>
    </Fragment>
  );
}

export default LoadingSpinner;
