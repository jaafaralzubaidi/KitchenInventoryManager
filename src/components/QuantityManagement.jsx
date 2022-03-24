import Header from "./Header";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";



// zones: has all the different created zones
// manage: is the selected food from the food search
const QuantityManagement = ({manage, zones}) => {

    
    const foodName = manage.name;
    const key = manage.barcode;

  
    const obj = {
        item: []
    }
    let food = [];
    let qty = [];
    

    
    for(let i = 0; i < zones.length; i++)
        food.push({"food": zones[i]} );
        
    for(let i = 0; i < zones.length; i++)
        qty.push(0)
 
    
    // const [test, setTest] = useState({ item:a, qty:0 })
    
    // console.log(test)
    // This will have all the quantities from the zones
    const [inputManager, setInputManager] = useState(food);
    const [qtyManager, setQtyManager] = useState(qty);
 
    console.log(qty)
    const [ind, setInd] = useState();
   
    function handleOnChange(event) {
        // value is from the quantity
        const{name, value} = event.target;
        const i = event.target.getAttribute("i");
  

        // spread the array before using indexed input
        // const array = [...inputManager];
        // array[index] = value;   

        // const newObj = { qty: inputManager, food: manage}

        // /

      
        // console.log(inputManager[index].qty)
        
    
    }

  
   
    
   

    
    return ( 
        <div className="quantityManagement">
            <Header title="QuantityManagement"/>
            <Link  className="link" to="/search">Go Back</Link>
            
            
            <h2>{foodName}</h2>
            {zones.map((todoItem, index) => {
                return <div className="color" key={index}  style={{backgroundColor: todoItem.color, width:"400px", height:"100px"}}>
                        <label htmlFor="quantity">Quantity</label>
                        <input   onChange={handleOnChange} type="number" i={index} name={index} id="quantity"/>
            
                        
                    </div>
            })}
        </div>
        
     );
}
 
export default QuantityManagement;