import styles from "./Navigation.module.css";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavigationLinks />
    </nav>
  );
};

export default Navigation;
