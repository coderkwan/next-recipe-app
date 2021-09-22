import React from "react";
import style from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Nabar";

export default function Kwanele({ sayings }) {
  const thelist = sayings.categories;
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <h1 className={style.title}>
          I like food. I like eating. And I don't want to deprive myself of good
          food.
        </h1>
        <p className={style.description}>The home of all recipes.</p>
        <div className={style.container}>
          <div className={style.grid}>
            {thelist.map((item, key) => {
              return (
                <div key={key} className={style.card}>
                  <Link href={`/meals/${item.strCategory}`}>
                    <div>
                      <Image
                        src={item.strCategoryThumb}
                        height={200}
                        width={320}
                        alt="thumbnail"
                      />
                      <a className={style.smalltitle}>{item.strCategory}</a>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const sayings = await data.json();

  return {
    props: {
      sayings,
    },
  };
};
