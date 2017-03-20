import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);

    // Toggle the state every second
    setInterval(() => {
      props.toggleText();
    }, 1000);
  }

  render() {
    const display = this.props.showText ? this.props.text : 'o.o';
    return (
      <Text>{display}</Text>
    );
  }
}

export default Blink;
