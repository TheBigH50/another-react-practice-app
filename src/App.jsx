import { Component } from "react";
import Heading from "./components/heading";
import Button from "./components/buttons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Heading title="Hello World!" />
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </header>
      </div>
    );
  }
}

export default App;
