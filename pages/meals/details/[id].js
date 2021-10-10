import Image from "next/dist/client/image";
import PrimaryBtn from "../../../components/PrimaryBtn";
import style from "../../../styles/Details.module.css";
import { Fragment } from "react";

function Details({ result }) {
  const final = result.meals[0];

  function split(sentence) {
    return sentence.split(".");
  }
  const myInstru = split(final.strInstructions);

  return (
    <div className={style.container}>
      <h2>{final.strMeal}</h2>
      <div className={style.header}>
        <div className={style.imgContainer}>
          <Image
            className={style.image}
            height={300}
            width={460}
            layout="responsive"
            src={final.strMealThumb}
            alt={final.strMeal}
          />
        </div>
        <div className={style.headerDescription}>
          <p className={style.para}>
            Area: <span>{final.strArea}</span>
          </p>
          <p className={style.para}>
            Category: <span>{final.strCategory}</span>
          </p>
          <div className={style.btn}>
            <PrimaryBtn text="Watch on Youtube" link="" />
          </div>
        </div>
      </div>
      <div className={style.ingrediants}>
        <h3>Ingrediants</h3>
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
