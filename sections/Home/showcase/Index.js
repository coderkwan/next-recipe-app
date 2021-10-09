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
        <div className={styles.searchContainer}>
          <input
            className={styles.input}
            placeholder="Discover our nice Recipes"
            type="text"
          />
          <div className={styles.icon}>
            <Image height={25} width={25} src="/icon.png" alt="search" />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.mealWrapper}>
          <div className={styles.bigMeal}>
            <Image
              height={384}
              width={384}
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
