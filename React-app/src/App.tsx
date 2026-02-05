import ListGroup from "./Components/ListGroup/";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { produce } from "immer";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const [tags, setTags] = useState(['happy', 'exciting']);
  
  const [game, setGame] = useState({
    id: 1,
    player: {
      name:'John',
    },
  });

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });
  
  const [drink, setDrink] = useState({
    title: 'Americano',
    price: 6
  });

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });
  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleEvent = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  const handleGame = () => {
    setGame({...game, player: {...game.player, name: 'Bob'}});
  };

  const handleTag = () => {
    //Add
    setTags([ ...tags, 'cheerful']);

    //Remove
    setTags(tags.filter(tag => tag !== 'happy'));

    //Update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
  }


  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true} : bug))

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      }),
    );

    setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, title: 'Error handling'} : bug))
  };

  const handlePrice = () => {
    // const newDrink = {
    //   ...drink,
    //   price : drink.price + 1
    // }
    // setDrink(newDrink);
    if (drink.price < 100){
      setDrink({...drink, price: drink.price + 1});
    } else {
      alert("Maximum price reached!!");
    }
  };

  return (
    <div>
      <BsFillCalendarFill />
      <NavBar cartItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Submit</Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button> <br /> <br />
      {drink.price}
      <button onClick={handlePrice}>Change Price</button>
    </div>
  );
}

export default App;
