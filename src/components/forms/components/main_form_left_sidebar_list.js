import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
/**
* @author Antonio Souza
* @class MainFormLeftSideBarList
**/
class MainFormLeftSideBarList extends Component {
 state = {}

 render(){
 const { container } = styles
  return(
   <View style={container}>
     <Text>MainFormLeftSideBar</Text>
   </View>
   )
  }
 }


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})
export default MainFormLeftSideBarList