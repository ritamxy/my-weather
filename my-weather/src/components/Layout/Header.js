import classes from "./Header.module.css";
import ThemeChangeButton from "./ThemeChangeButton";

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>My Weather</h1>
        <ThemeChangeButton />
      </header>
    </div>
  );
};

export default Header;
