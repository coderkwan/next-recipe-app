import styles from "../../../styles/Recipes.module.css";
import { useRouter } from "next/router";
import RandomMealCard from "../../../components/RandomMealCard";
import Head from "next/dist/shared/lib/head";

function Area({ result }) {
  const themeal = result.meals;
  const route = useRouter();
  const { id } = route.query;

  return (
    <div>
      <Head>
        <title>{`${id} recipes`}</title>
        <meta
          name="description"
          content={`This is a list of all ${id} recipes`}
        />
      </Head>
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
