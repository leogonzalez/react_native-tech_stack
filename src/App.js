import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { Header } from "./components/common";
import LibraryList from './components/LibraryList'

const store = createStore(reducers);

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header headerText="Tech Stack" />
          <Text>App</Text>
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;
