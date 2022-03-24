import React, { useState } from "react";

function ZoneItem(props) {
  const [isMousedOver, setIsMousedOver] = useState(false);

  function handleMouseOver() {
    setIsMousedOver(true);
  }
  function handleMouseOut() {
    setIsMousedOver(false);
  }
  
  function handleDelete() {
    props.onChecked(props.id);
  }
  return (
    <div className="zoneItem" style={{ backgroundColor: props.text.color }}>
  
      <p style={{ backgroundColor: props.text.color }} >Zone: {props.text.name}
        <span           
          onClick={handleDelete}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={isMousedOver ? { backgroundColor: "Red" } : null}
        >DELETE
        </span>
        </p>
    </div>
  );
}

export default ZoneItem;
