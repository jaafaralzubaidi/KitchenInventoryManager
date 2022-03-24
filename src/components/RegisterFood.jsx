import { useState } from "react";
import Button from "./Button";
import Header from "./Header";

const RegisterFood = (props) => {
  const [food, setFood] = useState({
    name: "",
    barcode: "",
    units: "",
    restock: "",
  });

  function handleOnChange(event) {
    const { value, name } = event.target;

    setFood((previousFood) => {
      if (name === "name") return { name: value, barcode: previousFood.barcode, units: previousFood.units, restock: previousFood.restock };
      else if (name === "barcode") return { name: previousFood.name, barcode: value, units: previousFood.units, restock: previousFood.restock };
      else if (name === "units") return { name: previousFood.name, barcode: previousFood.barcode, units: value, restock: previousFood.restock };
      else if (name === "restock") return { name: previousFood.name, barcode: previousFood.barcode, units: previousFood, restock: value };
    });
  }

  function submitFood(event) {
    // Invoking addFood function in App  with a new food object created here
    props.addFood(food);
    setFood({ name: "", barcode: "", units: "", restock: "" });
    event.preventDefault();
  }

  function handleCancelClick() {
    setFood({ name: "", barcode: "", units: "", restock: "" });
  }

 
  return (
    <div className="registerFood">
      
    
      <Header title="Register Food" />

      <div className="container">
        <form onSubmit={submitFood}>
 
          <div className="inputs">
            <input value={food.name} onChange={handleOnChange} type="text" name="name" id="name" placeholder="Enter a food Name" required />
            <input value={food.barcode} onChange={handleOnChange} type="number" name="barcode" id="barcode" placeholder="Enter food barcode" required />
            <input value={food.restock} onChange={handleOnChange} type="number" id="restock" name="restock" placeholder="Minimum quantity" required min="1" />
            <select value={food.units} onChange={handleOnChange} id="units" name="units" required>
              <option value="">Units</option>
              <option value="grams" required>
                Grams
              </option>
              <option value="milliliters">Milliliters</option>
              <option value="each">Each</option>
            </select>
          </div>

 

          <Button type="submit" text="Submit" />
          <Button type="button" text="Cancel" onClick={handleCancelClick} />
        </form>
      </div>
    </div>
  );
};

export default RegisterFood;
