import React from "react";
import Image from "next/dist/client/image";
import mstyle from "../../styles/Home.module.css";
import Link from "next/link";

function Mypost({ result }) {
  const themeal = result.meals;
  return (
    <div className={mstyle.container}>
      <h2 className={mstyle.title}></h2>
      <div className={mstyle.grid}>
        {themeal.map((item, key) => {
          return (
            <div key={key} className={mstyle.card}>
              <div>
                <Image
                  src={item.strMealThumb}
                  height={320}
                  width={320}
                  alt="thumbnail"
                />
                <p className={mstyle.description}>{item.strMeal}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link href="/">
        <a className={mstyle.title}>Home</a>
      </Link>
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
