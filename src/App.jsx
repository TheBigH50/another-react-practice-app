import { Component } from "react";
import Heading from "./components/heading";
import Button from "./components/buttons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Heading title="Hello World!" />
          <Button onClick={() => alert("clicked btn 1")}>
          Button 1
          </Button>
          <Button onClick={() => alert("clicked btn 2")}>
            Button 2
            </Button>
          <Button onClick={() => alert("clicked btn 3")}>
            Button 3
            </Button>
        </header>
      </div>
    );
  }
}

export default App;
