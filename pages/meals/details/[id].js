import Image from "next/image";
import style from "../../../styles/Details.module.css";
import Link from "next/link";
import mstyle from "../../../styles/Home.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";

function Details({ result }) {
  const final = result.meals[0];
  const cont = useRef();
  function split(sentence) {
    return sentence.split(".");
  }
  const myInstru = split(final.strInstructions);
  useEffect(() => {
    gsap.to(cont.current, 1, {
      opacity: 1,
      ease: "circ",
    });
  }, [cont]);
  return (
    <div>
      <div ref={cont} className={style.container}>
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
              <tr key="d2f">
                <th>Ingrediants</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              <tr key="ffv">
                <td>{final.strIngredient1}</td>
                <td>{final.strMeasure1}</td>
              </tr>
              <tr key="bnthr">
                <td>{final.strIngredient2}</td>
                <td>{final.strMeasure2}</td>
              </tr>
              <tr key="regeg">
                <td>{final.strIngredient3}</td>
                <td>{final.strMeasure3}</td>
              </tr>
              <tr key="k67k6">
                <td>{final.strIngredient4}</td>
                <td>{final.strMeasure4}</td>
              </tr>
              <tr key="wyjyh">
                <td>{final.strIngredient5}</td>
                <td>{final.strMeasure5}</td>
              </tr>
              <tr key="my5ja">
                <td>{final.strIngredient6}</td>
                <td>{final.strMeasure6}</td>
              </tr>
              <tr key="hhtr">
                <td>{final.strIngredient7}</td>
                <td>{final.strMeasure7}</td>
              </tr>
              <tr key="tttjt">
                <td>{final.strIngredient8}</td>
                <td>{final.strMeasure8}</td>
              </tr>
              <tr key="e4yy">
                <td>{final.strIngredient9}</td>
                <td>{final.strMeasure9}</td>
              </tr>
              <tr key="tjtg">
                <td>{final.strIngredient10}</td>
                <td>{final.strMeasure10}</td>
              </tr>
              <tr key="jjyyrt">
                <td>{final.strIngredient11}</td>
                <td>{final.strMeasure11}</td>
              </tr>
              <tr key="dde5y">
                <td>{final.strIngredient12}</td>
                <td>{final.strMeasure12}</td>
              </tr>
              <tr key="jyjww">
                <td>{final.strIngredient13}</td>
                <td>{final.strMeasure13}</td>
              </tr>
              <tr key="556t">
                <td>{final.strIngredient14}</td>
                <td>{final.strMeasure14}</td>
              </tr>
              <tr key="556g">
                <td>{final.strIngredient15}</td>
                <td>{final.strMeasure15}</td>
              </tr>
              <tr key="gg22w">
                <td>{final.strIngredient16}</td>
                <td>{final.strMeasure16}</td>
              </tr>
              <tr key="ttt65">
                <td>{final.strIngredient17}</td>
                <td>{final.strMeasure17}</td>
              </tr>
              <tr key="44uujj">
                <td>{final.strIngredient18}</td>
                <td>{final.strMeasure18}</td>
              </tr>
              <tr key="8ikr">
                <td>{final.strIngredient19}</td>
                <td>{final.strMeasure19}</td>
              </tr>
              <tr key="rr521">
                <td>{final.strIngredient20}</td>
                <td>{final.strMeasure20}</td>
              </tr>
              <tr key="6rge">
                <td>{final.strIngredient21}</td>
                <td>{final.strMeasure21}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p className={style.smalltitle}>Instructions</p>
          {myInstru.map((item, key) => {
            if (item.length > 5) {
              return (
                <p key={key} className={style.des}>
                  <li className={style.des}>{item}</li>
                </p>
              );
            }
          })}
        </div>
        <Link href="/">
          <a className={mstyle.linker}>Home</a>
        </Link>
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
