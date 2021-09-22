import React from "react";
import style from "./nav.module.css";
import Link from "next/link";

function Nabar() {
  return (
    <div className={style.nav}>
      <Link href="/">
        <h3 className={style.home}>Home</h3>
      </Link>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default Nabar;
