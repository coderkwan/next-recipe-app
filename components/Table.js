import style from "../styles/forComponents/Table.module.css";

function Table({ data }) {
  return (
    <table className={style.table}>
      <thead>
        <tr key="7878iol">
          <td>Ingredients</td>
          <td>Measure</td>
        </tr>
      </thead>
      <tbody>
        <tr key="mjui8">
          <td>{data.strIngredient1}</td>
          <td>{data.strMeasure1}</td>
        </tr>
        {data.strIngredient2 && (
          <tr key="zzd45">
            <td>{data.strIngredient2}</td>
            <td>{data.strMeasure2}</td>
          </tr>
        )}
        {data.strIngredient3 && (
          <tr key="112wsaz">
            <td>{data.strIngredient3}</td>
            <td>{data.strMeasure3}</td>
          </tr>
        )}
        {data.strIngredient4 && (
          <tr key="cdd542">
            <td>{data.strIngredient4}</td>
            <td>{data.strMeasure4}</td>
          </tr>
        )}
        {data.strIngredient5 && (
          <tr key="3323v">
            <td>{data.strIngredient5}</td>
            <td>{data.strMeasure5}</td>
          </tr>
        )}
        {data.strIngredient6 && (
          <tr key="fdf2">
            <td>{data.strIngredient6}</td>
            <td>{data.strMeasure6}</td>
          </tr>
        )}
        {data.strIngredient7 && (
          <tr key="65ut">
            <td>{data.strIngredient7}</td>
            <td>{data.strMeasure7}</td>
          </tr>
        )}
        {data.strIngredient8 && (
          <tr key="nnh6">
            <td>{data.strIngredient8}</td>
            <td>{data.strMeasure8}</td>
          </tr>
        )}
        {data.strIngredient9 && (
          <tr key="nn7y">
            <td>{data.strIngredient9}</td>
            <td>{data.strMeasure9}</td>
          </tr>
        )}
        {data.strIngredient10 && (
          <tr key="vcz1">
            <td>{data.strIngredient10}</td>
            <td>{data.strMeasure10}</td>
          </tr>
        )}
        {data.strIngredient11 && (
          <tr key="00pio">
            <td>{data.strIngredient11}</td>
            <td>{data.strMeasure11}</td>
          </tr>
        )}
        {data.strIngredient12 && (
          <tr key="ffgt5">
            <td>{data.strIngredient12}</td>
            <td>{data.strMeasure12}</td>
          </tr>
        )}
        {data.strIngredient13 && (
          <tr key="6767f">
            <td>{data.strIngredient13}</td>
            <td>{data.strMeasure13}</td>
          </tr>
        )}
        {data.strIngredient14 && (
          <tr key="dse3">
            <td>{data.strIngredient14}</td>
            <td>{data.strMeasure14}</td>
          </tr>
        )}
        {data.strIngredient15 && (
          <tr key="11qwe">
            <td>{data.strIngredient15}</td>
            <td>{data.strMeasure15}</td>
          </tr>
        )}
        {data.strIngredient16 && (
          <tr key="cvvee">
            <td>{data.strIngredient16}</td>
            <td>{data.strMeasure16}</td>
          </tr>
        )}
        {data.strIngredient17 && (
          <tr key="zza">
            <td>{data.strIngredient17}</td>
            <td>{data.strMeasure17}</td>
          </tr>
        )}
        {data.strIngredient18 && (
          <tr key="wef">
            <td>{data.strIngredient18}</td>
            <td>{data.strMeasure18}</td>
          </tr>
        )}
        {data.strIngredient19 && (
          <tr key="23e">
            <td>{data.strIngredient19}</td>
            <td>{data.strMeasure19}</td>
          </tr>
        )}
        {data.strIngredient20 && (
          <tr key="hhpp">
            <td>{data.strIngredient20}</td>
            <td>{data.strMeasure20}</td>
          </tr>
        )}
        {data.strIngredient21 && (
          <tr key="hyhyu67">
            <td>{data.strIngredient21}</td>
            <td>{data.strMeasure21}</td>
          </tr>
        )}
        {data.strIngredient22 && (
          <tr key="bg87">
            <td>{data.strIngredient22}</td>
            <td>{data.strMeasure22}</td>
          </tr>
        )}
        {data.strIngredient23 && (
          <tr key="22eed">
            <td>{data.strIngredient23}</td>
            <td>{data.strMeasure23}</td>
          </tr>
        )}
        {data.strIngredient24 && (
          <tr key="cr56">
            <td>{data.strIngredient24}</td>
            <td>{data.strMeasure24}</td>
          </tr>
        )}
        {data.strIngredient25 && (
          <tr key="wew33">
            <td>{data.strIngredient25}</td>
            <td>{data.strMeasure25}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
