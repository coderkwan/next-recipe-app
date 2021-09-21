import React from "react";
import Image from "next/image";
import style from "../../../styles/Details.module.css";
import Link from "next/link";

function Details({ result }) {
  const final = result.meals[0];
  return (
    <div className={style.container}>
      <Image src={final.strMealThumb} height={300} width={300} alt="food" />
      <p className={style.title}>{final.strMeal}</p>
      <p className={style.description}>{final.strInstructions}</p>
    </div>
  );
}

export default Details;

export const getServerSideProps = async (context) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${context.params.id}`
  );
  const result = await data.json();
  return {
    props: {
      result,
    },
  };
};
