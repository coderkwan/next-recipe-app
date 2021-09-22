import React from "react";
import style from "./nav.module.css";
import Link from "next/link";
import { useState } from "react";

function Nabar() {
  const cate = [
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
    "Breakfast",
    "Goat",
  ];

  const [menu, setmenu] = useState(false);
  function toggle() {
    setmenu(!menu);
  }
  return (
    <div className={style.nav}>
      <Link href="/">
        <h3 className={style.home}>Home</h3>
      </Link>
      <div className={style.navContainer}>
        <h3 onClick={toggle} className={style.home}>
          Categories
        </h3>
        {menu && (
          <ul className={style.list}>
            {cate.map((item, key) => {
              return (
                <Link key={key} href={`/meals/${item}`}>
                  <li onClick={toggle}>{item}</li>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Nabar;
const cate = [
  "Beef",
  "Chicken",
  "Dessert",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
  "Breakfast",
  "Goat",
];
