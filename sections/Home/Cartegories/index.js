import React from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import style from "../../../styles/Home.module.css";

function Categories({ categories }) {
  const thelist = categories.categories;
  return (
    <div>
      <div className={style.grid}>
        {thelist.map((item, key) => {
          return (
            <div key={key} className={style.card}>
              <Link href={`/meals/${item.strCategory}`}>
                <span>
                  <Image
                    src={item.strCategoryThumb}
                    height={200}
                    width={320}
                    alt="thumbnail"
                  />
                  <a className={style.smalltitle}>{item.strCategory}</a>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
