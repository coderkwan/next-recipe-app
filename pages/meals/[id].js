import React from "react";
import Image from "next/dist/client/image";
import styles from "../../styles/Recipes.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import PrimaryBtn from "../../components/PrimaryBtn";

function Mypost({ result }) {
  const themeal = result.meals;
  const route = useRouter();
  const { id } = route.query;
  const cont = useRef();

  useEffect(() => {
    gsap.to(cont.current, 1, {
      opacity: 1,
      ease: "circ",
    });
  }, [cont]);
  return (
    <div>
      <div ref={cont} className={styles.container}>
        <h2 className={styles.title}>{id} Recipes</h2>
        <div className={styles.grid}>
          {themeal.map((item, key) => {
            return (
              <div key={key} className={styles.card}>
                <div>
                  <Image
                    className="image"
                    src={item.strMealThumb}
                    height={240}
                    width={240}
                    alt="thumbnail"
                  />
                  <h4 className={styles.description}>{item.strMeal}</h4>
                  <PrimaryBtn
                    text="View Recipe"
                    link={`details/${item.strMeal}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mypost;

export const getStaticProps = async (context) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${context.params.id}`
  );
  const result = await data.json();
  return {
    props: {
      result,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const list = await data.json();
  const final = list.categories;
  const paths = final.map((item) => ({
    params: {
      id: item.strCategory,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
