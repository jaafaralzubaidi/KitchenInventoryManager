import React, {useState} from "react";

function Button(props) {
    
  // Add zone button color change
  const [isMousedOver, setIsMousedOver] = useState(false);
  
  function handleMouseOver() {
    setIsMousedOver(true);
  }
  function handleMouseOut() {
    setIsMousedOver(false);
  }
  return (
   
      <button className="btn" onClick={props.onClick} 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut} 
      type={props.type}
      style={isMousedOver ? { backgroundColor: "#03045E", color: "#CAF0F8" } : null}
      >
      {props.text}
      </button>
 
  );
}

export default Button ;
