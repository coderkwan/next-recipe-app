import Image from "next/dist/client/image";
import styles from "../../styles/Recipes.module.css";
import { useRouter } from "next/router";
import RandomMealCard from "../../components/RandomMealCard";
import Head from "next/dist/shared/lib/head";

function Mypost({ result }) {
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
