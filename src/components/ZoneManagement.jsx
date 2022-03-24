import React, { useState, useEffect } from "react";
import AddZone from "./AddZone";
import Header from "./Header";
import ZoneItem from "./ZoneItem";
import Button from "./Button";

function ZoneManagement({zone, setZone, zones, setZones}) {
  //This wil show the add zone side  menu
  const [isAddZone, setAddZone] = useState(false);

  // will handle the add zone click to display a color and input menu
  function handleAddZoneClick() {
    setAddZone(true);
  }
  function handleCancelClick() {
    setAddZone(false);
  }

  // // zones array of objects to store the zone
  // const [zones, setZones] = useState(()=> {
  //   // Get the stored array of zones
  //   const localDate = localStorage.getItem("zones");
  //   return localDate ? JSON.parse(localDate) : [];
  // });
  
  
  // // update every time the array of zones updates
  // useEffect(() => {
  //   localStorage.setItem("zones", JSON.stringify(zones));
  // }, [zones]);

  function addZone(zone) {
    for (let i = 0; i < zones.length; i++) {
      const { color } = zones[i];
      if (zone.color === color) {
        alert("A zone with the same color already exist");
        return;
      }
    }
    setZones((previousItem) => {
      if (previousItem.color !== zone.color) return [...previousItem, zone];
    });
  }
  function deleteItem(id) {
    setZones((previousZone) => {
      return previousZone.filter((item, index) => {
        return index !== id;
      });
    });
  }
  
  

  return (
    <div className="zoneManagement">
      <Header title="Zone Management" />
      {isAddZone ? <AddZone clickCancel={handleCancelClick} onAdd={addZone} zone={zone} setZone={setZone} /> : null}
 
      {!isAddZone ? <Button onClick={handleAddZoneClick} text="Add Zone" /> : null}
      
    
        {zones.map((todoItem, index) => ( <ZoneItem key={index} id={index} text={todoItem} onChecked={deleteItem} color={todoItem.color} /> ))}
  
    </div>
  );
}

export default ZoneManagement;
