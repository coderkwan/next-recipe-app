import PrimaryBtn from "./PrimaryBtn";
import styles from "../styles/forComponents/randomCard.module.css";
function RandomMealCard({ Meal }) {
  return (
    <div className={styles.container}>
      <h5 className={styles.h5}>{Meal.strMeal}</h5>
      <p className={styles.p}>
        Eget nec velit nulla et malesuada pretium dis mi arcu. Sem accumsan quis
        egestas nisi at. Arcu habitasse euismod quam imperdiet urna nam luctus
        lorem id.
      </p>
      <PrimaryBtn text="View Category" />
    </div>
  );
}

export default RandomMealCard;
