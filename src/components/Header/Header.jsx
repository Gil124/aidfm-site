import styles from "./Header.module.css";
import Button from "../Button/Button";
import homeSymbol from "../../assets/home-symbol.png";
import headerBackground from "../../assets/landing.page.jpeg";
import { Fade } from "react-awesome-reveal";

function Header() {
  const handleDiscoverButton = () => {};

  return (
    <div
      className={styles.header}
      style={{
        background: `linear-gradient(90deg, #211b68 0%, #211b6800 70%),
    linear-gradient(180deg, #211b68 0%, #221b6800 80%),
    url(${headerBackground}), lightgray 50% / cover no-repeat`,
      }}
    >
      <Fade direction="left">
        <div className={styles.title_container}>
          <h1 className={styles.header__title}>Investigação</h1>
          <img
            className={styles.header__decor}
            src={homeSymbol}
            alt="Medicine Logo"
          ></img>
          <h1 className={styles.header__title}>Desenvolvimento</h1>
        </div>
      </Fade>
      <Fade direction="left">
        <Button
          text={"Descobre Mais"}
          type="btn--home"
          onClick={handleDiscoverButton}
        />
      </Fade>
    </div>
  );
}

export default Header;
