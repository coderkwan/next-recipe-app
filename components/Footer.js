import styles from "../styles/forComponents/Footer.module.css";
import Link from "next/dist/client/link";
function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link href="/">
                    <p className={styles.home}>
                        Meals<span>O</span>ff
                    </p>
                </Link>
                <div>
                    <p>
                        Built by{" "}
                        <a href="https://kwanele.netlify.app" target="blank">
                            Kwanele Gamedze
                        </a>
                    </p>
                </div>
                <div className={styles.links}>
                    <p>Enjoy your Meals!</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
