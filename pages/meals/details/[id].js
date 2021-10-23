import Image from "next/dist/client/image";
import Table from "../../../components/Table";
import style from "../../../styles/Details.module.css";
import Head from "next/head";

function Details({ result }) {
  const final = result.meals[0];

  function split(sentence) {
    return sentence.split(".");
  }
  const myInstru = split(final.strInstructions);

  return (
    <div className={style.container}>
      <Head>
        <title>{final.strMeal}</title>
        <meta
          name="description"
          content={`Ingredients and instructions to follow when preparing ${final.strMeal}`}
        />
      </Head>
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
            <a
              rel="noreferrer"
              target="_blank"
              className={style.link}
              href={final.strYoutube}
            >
              Watch on Youtube
            </a>
          </div>
        </div>
      </div>
      <div className={style.ingrediants}>
        <h2>Ingredients</h2>
        <Table data={final}></Table>
      </div>
      <div className={style.instructionsContainer}>
        <div className={style.instructions}>
          <h2>Instruction</h2>
          <ul>
            {myInstru.map((item, key) => {
              if (item.length > 3) {
                return <li key={key}>{item}</li>;
              }
            })}
          </ul>
        </div>
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
