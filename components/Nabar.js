import style from "../styles/forComponents/nav.module.css";
import Link from "next/link";
import { useState } from "react";
import { categories } from "../data/Category";

function Nabar() {
  const [menu, setmenu] = useState(false);
  function toggle() {
    setmenu(!menu);
  }

  let menuName = "Categories";
  if (menu) {
    menuName = "Close";
  } else {
    menuName = "Categories";
  }

  return (
    <div className={style.wrapper}>
      <div className={style.nav}>
        <Link href="/">
          <a className={style.home}>
            Meals<span>O</span>ff
          </a>
        </Link>
        <div className={style.navContainer}>
          <h3 onClick={toggle} className={style.home}>
            {menuName}
          </h3>
          {menu && (
            <ul className={style.list}>
              {categories.map((item, key) => {
                return (
                  <Link key={key} href={`/meals/${item.strCategory}`}>
                    <a onClick={toggle}>{item.strCategory}</a>
                  </Link>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nabar;
