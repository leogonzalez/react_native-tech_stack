import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(reducers);

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>App</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
