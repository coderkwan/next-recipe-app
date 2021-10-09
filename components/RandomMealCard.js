import PrimaryBtn from "./PrimaryBtn";
import styles from "../styles/forComponents/randomCard.module.css";

function RandomMealCard({ Meal }) {
  var yourString = Meal.strInstructions; //replace with your string.
  var maxLength = 180; // maximum number of characters to extract

  //trim the string to the maximum length
  var trimmedString = yourString.substr(0, maxLength);

  //re-trim if we are in the middle of a word
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );

  return (
    <div className={styles.container}>
      <h5 className={styles.h5}>{Meal.strMeal}</h5>
      <p className={styles.p}>{trimmedString}...</p>
      <PrimaryBtn text="View Recipe" />
    </div>
  );
}

export default RandomMealCard;
