import React from "react";
import Image from "next/dist/client/image";
import mstyle from "../../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../../components/Nabar";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Mypost({ result }) {
  const themeal = result.meals;
  const route = useRouter();
  const { id } = route.query;
  const cont = useRef();

  useEffect(() => {
    gsap.to(cont.current, 1, {
      opacity: 1,
      ease: "circ",
    });
  }, [cont]);
  return (
    <div>
      <Navbar />
      <div ref={cont} className={mstyle.container}>
        <h2 className={mstyle.title}>{id} Recipes</h2>
        <div className={mstyle.grid}>
          {themeal.map((item, key) => {
            return (
              <div key={key} className={mstyle.card}>
                <Link href={`/meals/details/${item.strMeal}`}>
                  <div>
                    <Image
                      src={item.strMealThumb}
                      height={320}
                      width={320}
                      alt="thumbnail"
                    />
                    <p className={mstyle.description}>{item.strMeal}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <Link href="/">
          <a className={mstyle.linker}>Home</a>
        </Link>
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
