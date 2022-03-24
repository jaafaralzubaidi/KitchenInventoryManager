import { useState } from "react";
import Button from "./Button"
const SearchByBarcode = (props) => {
  // For Controlling the input
  const [searchedBarcode, setSearchedBarcode] = useState("");

  function handleOnSubmit(event) {
    event.preventDefault();
    props.setBarcodeSearchResults([]);

    const barcode = searchedBarcode;

    setSearchedBarcode(barcode);

    for (let i in props.foods) {
      if (props.foods[i].barcode === barcode) {
        props.setBarcodeSearchResults((previousResult) => {
          return [...previousResult, props.foods[i]];
        });
      }
    }

    setSearchedBarcode("");
  }

  function handleChange(event) {
    setSearchedBarcode(event.target.value);
  }

  function handleOnClick() {
    setSearchedBarcode("");
    props.setBarcodeSearchResults([]);
  }
  return (
    
      <form onSubmit={handleOnSubmit}>
        <div>
          <h2>Search by barcode:</h2>
          <input value={searchedBarcode} onChange={handleChange} type="number" name="barcode" placeholder="Enter a barcode" />
        </div>
        <Button text="Search"/>
        <Button type="button" text="clear" onClick={handleOnClick}/>
 
      </form>

  );
};

export default SearchByBarcode;
