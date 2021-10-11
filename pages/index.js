import { useState, useRef } from "react";
import Showcase from "../sections/Home/showcase/Index";
import RandomMeal from "../sections/Home/randomMeals";
import Categories from "../sections/Home/Cartegories";
import SearchArea from "../components/SearchArea";
import { areas } from "../data/Category";
import Head from "next/head";

export default function MainComponent({ random, random2, random3 }) {
  const mylist = [""];
  mylist.push(random.meals[0]);
  mylist.push(random2.meals[0]);
  mylist.push(random3.meals[0]);
  mylist.shift();

  const [click, setClick] = useState(false);
  const app = useRef();

  let display = "none";

  const handleClick = (e) => {
    e.preventDefault();
    setClick(true);
  };
  const closeList = (e) => {
    e.preventDefault();
    setClick(false);
  };

  click ? (display = "flex") : (display = "none");

  return (
    <div>
      <Head>
        <link rel="icon" href="/fork.png" type="image/x-icon" />
        <title>All Recipes</title>
      </Head>
      <Showcase clicked={handleClick} />
      <SearchArea closeList={closeList} display={display} list={areas} />
      <RandomMeal mylist={mylist} />
      <Categories />
    </div>
  );
}

export const getServerSideProps = async () => {
  const myRandom = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const myRandom2 = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const myRandom3 = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  const random = await myRandom.json();
  const random2 = await myRandom2.json();
  const random3 = await myRandom3.json();

  return {
    props: {
      random,
      random2,
      random3,
    },
  };
};
