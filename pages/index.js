import Showcase from "../sections/Home/showcase/Index";
import RandomMeal from "../sections/Home/randomMeals";
import Categories from "../sections/Home/Cartegories";
import SearchArea from "../components/SearchArea";

export default function MainComponent({
  list,
  cateList,
  random,
  random2,
  random3,
}) {
  const mylist = [""];
  mylist.push(random.meals[0]);
  mylist.push(random2.meals[0]);
  mylist.push(random3.meals[0]);
  mylist.shift();
  return (
    <div>
      <Showcase />
      <SearchArea list={list} />
      <RandomMeal mylist={mylist} />
      <Categories cateList={cateList} />
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
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const MYdata = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const list = await MYdata.json();

  const cateList = await data.json();

  const random = await myRandom.json();
  const random2 = await myRandom2.json();
  const random3 = await myRandom3.json();

  return {
    props: {
      random,
      random2,
      random3,
      cateList,
      list,
    },
  };
};
