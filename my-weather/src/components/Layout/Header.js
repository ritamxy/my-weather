import classes from "./Header.module.css";
import ThemeChangeButton from "./ThemeChangeButton";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>My Weather</h1>
      <ThemeChangeButton />
    </header>
  );
};

export default Header;
