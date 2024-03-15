// TODO: create a component that displays a single bakery item

export default function BakeryItem(prop) {
    return (
      <p>
        <img src= {prop.image} height="100" alt = {prop.name}></img>
        <p>
        {prop.name}
        </p>
        <p>
        {prop.price}
        </p>
        <button onClick = {() => buttonClickFunc(prop)} > buy me! </button>
      </p>
    
    );
  }
  function buttonClickFunc(prop) {
    prop.increment(prop.price)
    prop.addToCartList(prop.name)
  }

// function Button(prop){
// return (
//   <button onClick = {prop.increment()}>
//     {"buy me"}
// </button>
// )
// }
