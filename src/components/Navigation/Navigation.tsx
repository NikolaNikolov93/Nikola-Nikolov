import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <nav className={styles.navigation}>
        <div className={styles.logo}>Nikola Nikolov</div>
        <NavigationLinks />
        <Link to="/contacts" className={styles.contacts}>
          Let's talk
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
