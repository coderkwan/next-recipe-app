import style from "../styles/forComponents/Table.module.css";

function Table({ data }) {
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr key="">
            <td>Ingredients</td>
            <td>Measure</td>
          </tr>
        </thead>
        <tbody>
          <tr key="">
            <td>{data.strIngredient1}</td>
            <td>{data.strMeasure1}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient2}</td>
            <td>{data.strMeasure2}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient3}</td>
            <td>{data.strMeasure3}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient4}</td>
            <td>{data.strMeasure4}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient5}</td>
            <td>{data.strMeasure5}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient6}</td>
            <td>{data.strMeasure6}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient7}</td>
            <td>{data.strMeasure7}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient8}</td>
            <td>{data.strMeasure8}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient9}</td>
            <td>{data.strMeasure9}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient10}</td>
            <td>{data.strMeasure10}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient11}</td>
            <td>{data.strMeasure11}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient12}</td>
            <td>{data.strMeasure12}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient13}</td>
            <td>{data.strMeasure13}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient14}</td>
            <td>{data.strMeasure14}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient15}</td>
            <td>{data.strMeasure15}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient16}</td>
            <td>{data.strMeasure16}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient17}</td>
            <td>{data.strMeasure17}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient18}</td>
            <td>{data.strMeasure18}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient19}</td>
            <td>{data.strMeasure19}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient20}</td>
            <td>{data.strMeasure20}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient21}</td>
            <td>{data.strMeasure21}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient22}</td>
            <td>{data.strMeasure22}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient23}</td>
            <td>{data.strMeasure23}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient24}</td>
            <td>{data.strMeasure24}</td>
          </tr>
          <tr key="">
            <td>{data.strIngredient25}</td>
            <td>{data.strMeasure25}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
