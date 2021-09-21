import React from "react";
import Image from "next/dist/client/image";
import style from "../../../styles/Home.module.css";
import Link from "next/link";

function Details({ result }) {
  const final = result.meals[0];
  return (
    <div className={style.container}>
      <p className={style.description}>{final.strMeal}</p>
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
