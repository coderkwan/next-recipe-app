import React, { useEffect, useRef } from "react";
import style from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Nabar";
import gsap from "gsap";

export default function Kwanele({ sayings }) {
  const thelist = sayings.categories;
  const cont = useRef();
  const cont2 = useRef();
  useEffect(() => {
    gsap.to([cont.current, cont2.current], 1, {
      opacity: 1,
      ease: "circ",
    });
  }, [cont, cont2]);
  return (
    <div>
      <Navbar />
      <div ref={cont} className={style.container}>
        <h1 className={style.title}>
          I like food. I like <span>eating.</span> And I dont want to deprive
          myself of <span>good food.</span>
        </h1>
        <p className={style.description}>The home of all recipes.</p>
        <div ref={cont2} className={style.container}>
          <div className={style.grid}>
            {thelist.map((item, key) => {
              return (
                <div key={key} className={style.card}>
                  <Link href={`/meals/${item.strCategory}`}>
                    <span>
                      <Image
                        src={item.strCategoryThumb}
                        height={200}
                        width={320}
                        alt="thumbnail"
                      />
                      <a className={style.smalltitle}>{item.strCategory}</a>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const sayings = await data.json();

  return {
    props: {
      sayings,
    },
  };
};
