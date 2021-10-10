import styles from "../styles/forComponents/button.module.css";
import Link from "next/dist/client/link";

function PrimaryBtn({ text, link }) {
  return (
    <>
      <Link href={link}>
        <a className={styles.btn}>{text}</a>
      </Link>
    </>
  );
}

export default PrimaryBtn;
