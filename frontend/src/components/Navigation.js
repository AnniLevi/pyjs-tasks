import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.header}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weather"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Weather
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
