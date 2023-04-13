import styles from "../styles/forComponents/button.module.css";
import Link from "next/dist/client/link";

function PrimaryBtn({ text, link }) {
  return (
    <>
      <Link href={link}>
        <p className={styles.btn}>{text}</p>
      </Link>
    </>
  );
}

export default PrimaryBtn;
