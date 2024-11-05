import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const NavigationLinks = () => {
  return (
    <ul className={styles.navLinks}>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
