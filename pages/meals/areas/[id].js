import Image from "next/dist/client/image";
import styles from "../../../styles/Recipes.module.css";
import { useRouter } from "next/router";
import PrimaryBtn from "../../../components/PrimaryBtn";
import RandomMealCard from "../../../components/RandomMealCard";

function Area({ result }) {
  const themeal = result.meals;
  const route = useRouter();
  const { id } = route.query;

  const dataBlur = (w, h) => `
      <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="S">
            <stop stop-color="#7a6549" offset="20%" />
            <stop stop-color="#787351" offset="50%" />
            <stop stop-color="#665947" offset="70%" />
          </linearGradient>
        </defs>
        <rect id="r" width="${w}" height="${h}" fill="url(#S)" />
      </svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>{id} Recipes</h2>
        <div className={styles.grid}>
          {themeal.map((item, key) => {
            return <RandomMealCard yourString="" Meal={item} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Area;

export const getStaticProps = async (context) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${context.params.id}`
  );
  const result = await data.json();
  return {
    props: {
      result,
    },
  };
};

export const getStaticPaths = async () => {
  const areas = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );

  const listArea = await areas.json();
  const finalAreas = listArea.meals;
  const paths = finalAreas.map((item) => ({
    params: {
      id: item.strArea,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
