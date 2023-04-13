import { useRef } from "react";
import Link from "next/dist/client/link";
import style from "../styles/forComponents/Sidebar.module.css";
import Image from "next/dist/client/image";

function SearchArea({ list, display, closeList }) {
  const listContainer = useRef();

  return (
    <div
      ref={listContainer}
      style={{ display: display }}
      className={style.container}
    >
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
        {list.map((item, key) => {
          return (
            <Link key={key} href={`/meals/areas/${item.strArea}`}>
              <p className={style.link}>{item.strArea}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SearchArea;
