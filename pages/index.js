import Navbar from "../components/Nabar";
import Showcase from "../sections/Home/showcase/Index";
import RandomMeal from "../sections/Home/randomMeals";
import Categories from "../sections/Home/Cartegories";
import PrimaryBtn from "../components/PrimaryBtn";

export default function MainComponent({ cateList, random, random2, random3 }) {
  const thelist = cateList.categories;

  const mylist = [""];
  mylist.push(random.meals[0]);
  mylist.push(random2.meals[0]);
  mylist.push(random3.meals[0]);
  mylist.shift();
  console.log(mylist);

  return (
    <div>
      {/* <Navbar /> */}
      <Showcase />
      <RandomMeal random={mylist} />
      <Categories categories={cateList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
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
  const cateList = await data.json();

  return {
    props: {
      cateList,
      random,
      random2,
      random3,
    },
  };
};
