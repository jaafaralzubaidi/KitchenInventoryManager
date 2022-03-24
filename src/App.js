import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import ZoneManagement from "./components/ZoneManagement";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterFood from "./components/RegisterFood";
import SearchFood from "./components/SearchFood";
import QuantityManagement from "./components/QuantityManagement";

function App() {
  
  // Zones 
  const [zone, setZone] = useState({ name: "", color: "" });
  
    // zones array of objects to store the zone
    const [zones, setZones] = useState(()=> {
      // Get the stored array of zones
      const localDate = localStorage.getItem("zones");
      return localDate ? JSON.parse(localDate) : [];
    });
    
    
    // update every time the array of zones updates
    useEffect(() => {
      localStorage.setItem("zones", JSON.stringify(zones));
    }, [zones]);
    
    

  
  
  //making array to store the food
  const [foods, setFoods] = useState(() => {
    const localData = localStorage.getItem("foods");
    return localData ? JSON.parse(localData) : [];
  });

  // Watching and updating the foods array if there's any change
  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(foods));
  }, [foods]);

  // Adding a food from RegisterFood to the foods array
  function addFood(food) {
    for (let i = 0; i < foods.length; i++) {
      const { barcode } = foods[i];
      if (food.barcode === barcode) {
        alert("A food with the same barcode already exist");
        return;
      }
    }
    setFoods((previousFood) => {
      if (previousFood.barcode !== food.barcode) return [...previousFood, food];
    });
  }
  
  
  
  
  // Search Food 
  const [nameSearchResults, setNameSearchResults] = useState([]);           // will have the results of all the food searched by name
  const [barcodeSearchResults, setBarcodeSearchResults] = useState([]);     // will have the results of all the food searched by barcode

  // Controlling the input 
  const[nameCount, setNameCount] = useState(0);                             
  const[barcodeCount, setBarcodeCount] = useState(0);
  
  useEffect(()=>{
    setNameCount(nameSearchResults.length);
  },[nameSearchResults])
  
  useEffect(()=>{
    setBarcodeCount(barcodeSearchResults.length);
  },[barcodeSearchResults])

  

  
  
  
  // Quantity Management
  // This will hold the item to be managed in QuantityManager
  // get the wanted item index from the <Link/>  then use it to create managedItem
  const [managedItem, setManagedItem] = useState({});
  
  
  
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <ZoneManagement zone={zone} setZone={setZone} zones={zones} setZones={setZones}/>
            </Route>
            <Route exact path="/register">
              <RegisterFood addFood={addFood} />
            </Route>
            <Route exact path="/search">
              <SearchFood foods={foods} setNameSearchResults={setNameSearchResults} nameCount={nameCount} nameSearchResults={nameSearchResults} setBarcodeSearchResults={setBarcodeSearchResults} barcodeCount={barcodeCount} barcodeSearchResults={barcodeSearchResults} setManagedItem={setManagedItem} />
            </Route>

            <Route exact path="/quantity">
              <QuantityManagement manage={managedItem} zones={zones}  />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
