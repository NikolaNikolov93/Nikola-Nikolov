import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const NavigationLinks = () => {
  return (
    <ul className={styles.navLinks}>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
