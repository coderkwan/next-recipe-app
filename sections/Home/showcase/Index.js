import React from "react";
import Image from "next/dist/client/image";
import styles from "../../../styles/Home.module.css";

function Showcase() {
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
        <input className={styles.input} type="text" />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.mealWrapper}>
          <div className={styles.bigMeal}>
            <Image
              height={284}
              width={284}
              src="/imgbin.png"
              alt="display meal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
