import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <Button color = "primary" onClick ={() => console.log("Submitted") }>Submit</Button>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      <Alert>
        Hello World.
      </Alert>
    </div>
  );
}

export default App;
