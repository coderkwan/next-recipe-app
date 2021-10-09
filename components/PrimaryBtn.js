import styles from "../styles/forComponents/button.module.css";

function PrimaryBtn({ text }) {
  return (
    <>
      <button className={styles.btn}>{text}</button>
    </>
  );
}

export default PrimaryBtn;
