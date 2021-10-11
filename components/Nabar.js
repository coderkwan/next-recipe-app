import style from "../styles/forComponents/nav.module.css";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { categories } from "../data/Category";
import { areas } from "../data/Category";
import SearchArea from "./SearchArea";

function Nabar({ toggleArea }) {
  const [menu, setmenu] = useState(false);
  const [click, setClick] = useState(false);

  let display = "none";

  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", closeList);
    return () => {
      router.events.off("routeChangeComplete", closeList);
    };
  }, [router.events]);

  const closeList = (e) => {
    setClick(false);
  };
  const openList = (e) => {
    setClick(true);
  };

  click ? (display = "flex") : (display = "none");

  function toggle() {
    setmenu(!menu);
  }
  const categorytext = useRef();
  const areatext = useRef();

  useEffect(() => {
    if (menu) {
      categorytext.current.style.color = "red";
    } else {
      categorytext.current.style.color = "black";
    }
  }, [menu]);

  return (
    <div className={style.wrapper}>
      <SearchArea closeList={closeList} display={display} list={areas} />
      <div className={style.nav}>
        <Link href="/">
          <a className={style.home}>
            Meals<span>O</span>ff
          </a>
        </Link>
        <div className={style.navContainer}>
          <h3 ref={areatext} onClick={openList} className={style.links}>
            Search by Area
          </h3>
        </div>
        <div className={style.navContainer}>
          <h3 ref={categorytext} onClick={toggle} className={style.links}>
            Categories
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
