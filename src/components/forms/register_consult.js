import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
/**
* @author
* @class RegisterConsult
**/
class RegisterConsult extends Component {
 state = {}

 render(){
 const { container } = styles
  return(
   <View style={container}>
     <Text>RegisterConsult</Text>
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
export default RegisterConsult