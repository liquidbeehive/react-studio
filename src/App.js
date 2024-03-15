import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const increment = (amount) => setCartPrice(cartTotal+amount)
  const[cartTotal, setCartPrice] = useState(0)

  const addToCartList = (foodItem) => setCartList([...cartContent, foodItem])
  const[cartContent, setCartList] = useState([])

  return (
    <div className="App">
      <div>
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem  name = {item.name} price = {item.price} image = {item.image} increment={increment} addToCartList={addToCartList}/>
      ))}</div>

      <div>
        <h2>Cart</h2>
        {cartContent.map((item, index) => ( 
        <p> {item}</p> 
      ))}


        <p>
        Your cart total is ${cartTotal}
        </p>
      </div>
    </div>
  );
}

export default App;
