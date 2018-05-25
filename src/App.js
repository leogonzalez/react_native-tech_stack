import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { Header } from "./components/common";
import LibraryList from './components/LibraryList'

const store = createStore(reducers);

// flex:1 on view is so components fills the entire space

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <Header headerText="Tech Stack" />
          <Text>App</Text>
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;
