import React, { useState } from "react";
import Button from "./Button";

function AddZone({onAdd, clickCancel, zone, setZone }) {
  // const [zone, setZone] = useState({ name: "", color: "", Quantity:0 });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setZone((previousValue) => {
      if (name === "input") return { name: value, color: previousValue.color };
      else if (name === "color") return { name: previousValue.name, color: value  };
    });

    //Add to local storage
  }
  function handleOnAdd() {
    onAdd(zone);
    setZone({ name: "", color: "" });
  }

  return (
    <div className="add-zone">
        <input onChange={handleOnChange} value={zone.name} type="text" name="input" placeholder="Enter a zone name" />
        <input onChange={handleOnChange} value={zone.color} type="color" name="color" />
        <Button onClick={handleOnAdd} text="Add" />
        <Button onClick={clickCancel} text="Cancel" />
    
    </div>
  );
}

export default AddZone;


//  var Object = {

//   zone: this.zone.current.value,
//   color: this.color.current.value,
//   food:[{
//       quantity:0,
//       item:{foodName: "oil1", barCode: "1",unit: "grams",reStock: 1}
//   }]



// };