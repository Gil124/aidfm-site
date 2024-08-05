import styles from "./Header.module.css";
import Button from "../Button/Button";
import homeSymbol from "../../assets/home-symbol.png";
import headerBackground from "../../assets/landing.page.jpeg";
import { Fade } from "react-awesome-reveal";
import { getContent } from "../Navbar/Navbar";

function Header() {
  const handleDiscoverButton = () => {
    window.location.href = "/about";
  };

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
        <div>
          <div className={styles.title_box}>
            <h1 className={styles.header__title}>{getContent().homepage.hero.title}</h1>
            <img
              className={styles.header__decor}
              src={homeSymbol}
              alt="Medicine Logo"
            ></img>
          </div>
          <div className={styles.title_box}>
            <h1 className={styles.header__title}>{getContent().homepage.hero.subtitle}</h1>
          </div>
        </div>
      </Fade>
      <Fade direction="left">
        <Button
          text={getContent().homepage.hero.button}
          type="btn--home"
          onClick={handleDiscoverButton}
        />
      </Fade>
    </div>
  );
}

export default Header;
