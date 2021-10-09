import Link from "next/dist/client/link";
import style from "../styles/forComponents/Sidebar.module.css";
import Image from "next/dist/client/image";

function SearchArea({ list, display, closeList }) {
  const areas = list.meals;
  return (
    <div style={{ display: display }} className={style.container}>
      <div className={style.close}>
        <p className={style.p}>Select a Country</p>
        <Image
          className={style.closeIcon}
          onClick={closeList}
          height={50}
          width={50}
          src="/closedark.png"
          alt="close menu"
        />
      </div>
      <div className={style.listContainer}>
        {areas.map((item, key) => {
          return (
            <Link key={key} href="">
              <a className={style.link}>{item.strArea}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SearchArea;
