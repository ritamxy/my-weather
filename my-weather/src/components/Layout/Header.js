import classes from "./Header.module.css";
import ThemeChangeButton from "./ThemeChangeButton";
import snowImage from "../../assets/snow-mountain.jpg";

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>My Weather</h1>
        <ThemeChangeButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={snowImage} alt="choose your weather" />
      </div>
    </div>
  );
};

export default Header;
