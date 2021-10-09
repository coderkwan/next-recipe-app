import Image from "next/dist/client/image";
import PrimaryBtn from "./PrimaryBtn";
import styles from "../styles/forComponents/categoryCard.module.css";
import Categories from "../sections/Home/Cartegories";

function CartegoryCard({ Cartegory }) {
  const mystring = Cartegory.strCategoryDescription;
  const trimNum = 200;
  const trimmed = mystring.substr(0, trimNum);
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <Image
          height={150}
          width={280}
          alt="category"
          src={Cartegory.strCategoryThumb}
        />
      </div>
      <h5 className={styles.h5}>{Cartegory.strCategory}</h5>
      <p className={styles.p}>{trimmed}</p>
      <PrimaryBtn text="View Category" />
    </div>
  );
}

export default CartegoryCard;
