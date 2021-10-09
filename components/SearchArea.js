import Link from "next/dist/client/link";
import style from "../styles/forComponents/Sidebar.module.css";

function SearchArea({ list }) {
  const areas = list.meals;
  return (
    <div className={style.container}>
      {areas.map((item, key) => {
        return (
          <Link key={key} href="">
            <a className={style.link}>{item.strArea}</a>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchArea;
