import { Component } from "react";

class Heading extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Heading title="Hello World!" />
          <Heading title="This is react" />
          <Heading title="Learing about Props" />
        </header>
      </div>
    );
  }
}

export default App;
