import { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import styles from "../../../styles/Home.module.css";
import foodImg from "../../../public/imgbin.png";

function Showcase({ clicked }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1 className={styles.h1}>
          Discover cool recipes. Cook the best meals
        </h1>
        <p className={styles.p}>
          Welcome to the beautiful collectionof world wide recipes. We value
          your meals
        </p>
        <button onClick={clicked} className={styles.input}>
          Search by area
        </button>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.mealWrapper}>
          <div className={styles.bigMeal}>
            <Image
              height={384}
              width={384}
              placeholder="blur"
              src={foodImg}
              alt="display meal"
            />
          </div>
          <div className={styles.mediumMeal}>
            <Image
              height={384}
              width={384}
              placeholder="blur"
              src={foodImg}
              alt="display meal"
            />
          </div>
          <div className={styles.smallMeal}>
            <Image
              height={384}
              width={384}
              placeholder="blur"
              src={foodImg}
              alt="display meal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
