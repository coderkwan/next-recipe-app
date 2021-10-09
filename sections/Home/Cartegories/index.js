import CartegoryCard from "../../../components/CartegoryCard";
import styles from "../../../styles/forComponents/categoryCard.module.css";

function Categories({ categories }) {
  const thelist = categories.categories;
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.header}>Here is A list of All Categories</h2>
      <div className={styles.container}>
        {thelist.map((item, key) => {
          return <CartegoryCard Cartegory={item} key={key} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
