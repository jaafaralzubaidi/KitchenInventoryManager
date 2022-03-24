import { useEffect, useState } from "react";
import Header from "./Header";
import SearchByBarcode from "./SearchByBarcode";
import SearchByName from "./SearchByName";
import {Link} from "react-router-dom";
const SearchFood = ({ foods, setNameSearchResults, nameCount, nameSearchResults, setBarcodeSearchResults, barcodeCount, barcodeSearchResults, setManagedItem }) => {

  // will return the index of the wanted food ind
  function manageByName(event) {
    const index = event.target.getAttribute("i");   // get the index from the clicked link
    setManagedItem(nameSearchResults[index])
  }
  
  
  
  
  
  function manageByBarcode(event) {
   
    // setIndex(event.target.getAttribute("i"));
    const index = event.target.getAttribute("i");
    setManagedItem(barcodeSearchResults[index])
  }

  return (
    <div className="searchFood">
      <Header title="Search For Food" />

      <div className="byName">
        <SearchByName foods={foods} setNameSearchResults={setNameSearchResults}/>
        <h3>Search Results: {nameCount} </h3>
        { nameSearchResults.map((todoItem, index) => (
          <p key={index}>{todoItem.name}<Link onClick={manageByName} i={index} className="link" to="/quantity">Register food</Link></p>
        ))}
      </div>

      <div className="byBarcode">
        <SearchByBarcode foods={foods} setBarcodeSearchResults={setBarcodeSearchResults} />
        <h3>Search Results: {barcodeCount}</h3>
        
          {barcodeSearchResults.map((todoItem, index) => (
            <p key={index}>{todoItem.name}<Link onClick={manageByBarcode} i={index} className="link" to="/quantity">Register food</Link></p>
          ))}
        
      </div>
    </div>
  );
};

export default SearchFood;
