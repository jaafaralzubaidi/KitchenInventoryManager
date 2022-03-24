import { useState } from "react";
import Button from "./Button"
const SearchByName = (props) => {
    
  // For Controlling the input
  const [searchedName, setSearchedName] = useState("");
  

  function handleOnSubmit(event) {
    event.preventDefault();
    props.setNameSearchResults([]);
    setSearchedName("");
 
    const foodName = searchedName.toLowerCase();

    setSearchedName(foodName);
    if(foodName){
      for (let i in props.foods) {
        if (props.foods[i].name.toLowerCase().includes(foodName)) {
          props.setNameSearchResults((previousResult) => {
            return [...previousResult, props.foods[i]];
          });
          
        }
      }
    }

    
  }

  function handleChange(event) {
    setSearchedName(event.target.value);
  }
  
  function handleOnClick() {
    setSearchedName("");
    props.setNameSearchResults([]);
  }

  return (
  
      <form onSubmit={handleOnSubmit}>
        <div>
          <h2>Search by food name:</h2>
          <input value={searchedName} onChange={handleChange} type="text" name="name"  placeholder="Enter a food name" />
        </div>
        <Button type="submit" text="Search"/>
        <Button type="button" text="clear" onClick={handleOnClick}/>
      </form>

  );
};

export default SearchByName;
