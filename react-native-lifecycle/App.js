import React, { Component } from 'react';
import { View, Button } from 'react-native';
import MyComponent from './tesst/MyComponent';

class App extends Component {
  state = {
    showComponent: true,
    count: 0,
  };

  toggleComponent = () => {
    this.setState({ showComponent: !this.state.showComponent });
  };

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.state.showComponent && <MyComponent count={this.state.count} />}
        <Button title="Toggle MyComponent" onPress={this.toggleComponent} />
        <Button title="Increment Count" onPress={this.incrementCount} />
      </View>
    );
  }
}

export default App;
