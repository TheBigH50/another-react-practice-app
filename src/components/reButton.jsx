//This is a generic re-usable button

import { Component } from "react";

class reButton extends Component {
    render() {
        return <button onClick={this.props.onClick}>{this.props.children}</button>;
    }
}

export default reButton;