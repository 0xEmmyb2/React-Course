import ListGroup from "./Components/ListGroup/";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
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

  const handleTag = () => {
    //Add
    setTags([ ...tags, 'cheerful']);

    //Remove
    setTags(tags.filter(tag => tag !== 'happy'));

    //Update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
  }


  const handleClick = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true}))

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      }),
    );
  };

  const handlePrice = () => {
    // const newDrink = {
    //   ...drink,
    //   price : drink.price + 1
    // }
    // setDrink(newDrink);
    setDrink({...drink, price: drink.price + 1});
  };

  return (
    <div>
      <BsFillCalendarFill />
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
