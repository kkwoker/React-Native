import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    const display = this.state.showText ? this.props.text : 'o.o';
    return (
      <Text>{display}</Text>
    );
  }
}

export default Blink;
