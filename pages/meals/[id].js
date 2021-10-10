import Image from "next/dist/client/image";
import styles from "../../styles/Recipes.module.css";
import { useRouter } from "next/router";
import PrimaryBtn from "../../components/PrimaryBtn";

function Mypost({ result }) {
  const themeal = result.meals;
  const route = useRouter();
  const { id } = route.query;

  const dataBlur = (w, h) => `
      <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="g">
            <stop stop-color="#7a6549" offset="20%" />
            <stop stop-color="#787351" offset="50%" />
            <stop stop-color="#665947" offset="70%" />
          </linearGradient>
        </defs>
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
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
            return (
              <div key={key} className={styles.card}>
                <div>
                  <Image
                    className="image"
                    src={item.strMealThumb}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      dataBlur(240, 240)
                    )}`}
                    height={240}
                    width={240}
                    alt="thumbnail"
                  />
                  <h4 className={styles.description}>{item.strMeal}</h4>
                  <PrimaryBtn
                    text="View Recipe"
                    link={`/meals/details/${item.strMeal}`}
                  />
                </div>
              </div>
            );
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
