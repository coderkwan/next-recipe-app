import React from "react";
import Image from "next/image";
import style from "../../../styles/Details.module.css";
import Link from "next/link";

function Details({ result }) {
  const final = result.meals[0];
  return (
    <div className={style.container}>
      <p className={style.title}>{final.strMeal}</p>
      <Image src={final.strMealThumb} height={300} width={300} alt="food" />
      <div className={style.mydiv}>
        <p className={style.smalltitle}>Category: {final.strCategory}</p>
        <p className={style.smalltitle}>Area: {final.strArea}</p>
        <a className={style.link} href={final.strYoutube}>
          Watch on YouTube
        </a>
      </div>
      <div>
        <p className={style.smalltitle}>Ingrediants</p>
        <table className={style.table}>
          <thead>
            <tr key="">
              <th>Ingrediants</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody>
            <tr key="">
              <td>{final.strIngredient1}</td>
              <td>{final.strMeasure1}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient2}</td>
              <td>{final.strMeasure2}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient3}</td>
              <td>{final.strMeasure3}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient4}</td>
              <td>{final.strMeasure4}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient5}</td>
              <td>{final.strMeasure5}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient6}</td>
              <td>{final.strMeasure6}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient7}</td>
              <td>{final.strMeasure7}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient8}</td>
              <td>{final.strMeasure8}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient9}</td>
              <td>{final.strMeasure9}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient10}</td>
              <td>{final.strMeasure10}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient11}</td>
              <td>{final.strMeasure11}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient12}</td>
              <td>{final.strMeasure12}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient13}</td>
              <td>{final.strMeasure13}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient14}</td>
              <td>{final.strMeasure14}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient15}</td>
              <td>{final.strMeasure15}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient16}</td>
              <td>{final.strMeasure16}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient17}</td>
              <td>{final.strMeasure17}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient18}</td>
              <td>{final.strMeasure18}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient19}</td>
              <td>{final.strMeasure19}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient20}</td>
              <td>{final.strMeasure20}</td>
            </tr>
            <tr key="">
              <td>{final.strIngredient21}</td>
              <td>{final.strMeasure21}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p className={style.smalltitle}>Instructions</p>
        <p className={style.description}>{final.strInstructions}</p>
      </div>
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
