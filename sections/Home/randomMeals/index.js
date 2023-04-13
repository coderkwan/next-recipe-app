import RandomMealCard from "../../../components/RandomMealCard";
import styles from "../../../styles/forComponents/randomCard.module.css";

function RandomMeal({ mylist }) {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.h2}>Today’s 3 Random Meals</h2>
      <div className={styles.wrapper}>
        {mylist.map((item, key) => {
          return (
            <RandomMealCard
              yourString={item.strInstructions}
              Meal={item}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RandomMeal;
