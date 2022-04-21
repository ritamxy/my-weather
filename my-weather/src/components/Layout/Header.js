import classes from "./Header.module.css";
import ThemeChangeButton from "./ThemeChangeButton";
import { Fragment } from "react";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>My Weather</h1>
        <ThemeChangeButton />
      </header>
    </Fragment>
  );
};

export default Header;
