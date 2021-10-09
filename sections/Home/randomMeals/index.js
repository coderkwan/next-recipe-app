import React, { useEffect, useState } from "react";
import RandomMealCard from "../../../components/RandomMealCard";

function RandomMeal({ random }) {
  return (
    <div>
      <h1>I am the Random Meal</h1>
      {random.map((item, key) => {
        return <h5 key={key}>{item.strMeal}</h5>;
      })}
    </div>
  );
}

export default RandomMeal;
