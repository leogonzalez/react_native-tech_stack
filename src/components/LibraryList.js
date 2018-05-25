import React, { Component } from 'react'
import { View, Text } from 'react-native'
import {connect} from 'react-redux'

class LibraryList extends Component {
  render () {
    return (
      <View>
        <Text>
          LibraryList
        </Text>
      </View>
    )
  }
}

function mapStateToProps({libraries}) {
  return {
    libraries
  }
}

export default connect(mapStateToProps)(LibraryList)
