import styles from "../styles/forComponents/Footer.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4>
          Meals<span>O</span>ff
        </h4>
        <div className={styles.links}>
          <p>Categoties</p>
          <p>Search by Area</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
