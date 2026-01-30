import ListGroup from "./Components/ListGroup/";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";
import { BsFillCalendarFill } from 'react-icons/bs';
import { produce } from 'immer';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false},
    { id: 2, title: 'Bug 2', fixed: false},
  ]);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const handleClick = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true}))

    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if (bug) bug.fixed = true;
    }));
  };

  return (
    <div>
      <BsFillCalendarFill/>
      {alertVisible &&<Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>}
      <Button  onClick ={() => setAlertVisibility(true) }>Submit</Button>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'fixed' : 'New'}</p>)}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
