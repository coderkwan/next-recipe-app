import RandomMealCard from "../../../components/RandomMealCard";
import styles from "../../../styles/forComponents/randomCard.module.css";

function RandomMeal({ random }) {
  return (
    <div className={styles.mainContainer}>
      <h2>Today’s 3 Random Meals</h2>
      <div className={styles.wrapper}>
        {random.map((item, key) => {
          return <RandomMealCard Meal={item} key={key} />;
        })}
      </div>
    </div>
  );
}

export default RandomMeal;
