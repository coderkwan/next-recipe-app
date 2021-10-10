import Image from "next/dist/client/image";
import PrimaryBtn from "./PrimaryBtn";
import styles from "../styles/forComponents/categoryCard.module.css";

function CartegoryCard({ Cartegory }) {
  const mystring = Cartegory.strCategoryDescription;
  const trimNum = 130;
  const trimmed = mystring.substr(0, trimNum);
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.imgDiv}>
          <Image
            className={styles.theImage}
            layout="responsive"
            height={140}
            width={200}
            placeholder="blur"
            alt="category"
            src={Cartegory.strCategoryThumb}
          />
        </div>
        <h5 className={styles.h5}>{Cartegory.strCategory}</h5>
        <p className={styles.p}>{trimmed}</p>
      </div>
      <PrimaryBtn
        link={`/meals/${Cartegory.strCategory}`}
        text="View Category"
      />
    </div>
  );
}

export default CartegoryCard;
