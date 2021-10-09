import Navbar from "../components/Nabar";
import Showcase from "../sections/Home/showcase/Index";
import RandomMeal from "../sections/Home/randomMeals";
import Categories from "../sections/Home/Cartegories";

export default function MainComponent({ cateList }) {
  const thelist = cateList.categories;

  return (
    <div>
      {/* <Navbar /> */}
      <Showcase />
      {/* <RandomMeal />
      <Categories categories={cateList} /> */}
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const cateList = await data.json();

  return {
    props: {
      cateList,
    },
  };
};
