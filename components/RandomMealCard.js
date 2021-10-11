import PrimaryBtn from "./PrimaryBtn";
import styles from "../styles/forComponents/randomCard.module.css";
import Image from "next/dist/client/image";

function RandomMealCard({ Meal, yourString }) {
  // var yourString = Meal.strInstructions;
  var maxLength = 100;
  var trimmedString = yourString.substr(0, maxLength);

  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          className={styles.theimage}
          src={Meal.strMealThumb}
          layout="fill"
          alt="Recipe"
        />
      </div>
      <h5 className={styles.h5}>{Meal.strMeal}</h5>
      <p className={styles.p}>{trimmedString}</p>
      <div className={styles.btn}>
        <PrimaryBtn
          link={`/meals/details/${Meal.strMeal}`}
          text="View Recipe"
        />
      </div>
    </div>
  );
}

export default RandomMealCard;
