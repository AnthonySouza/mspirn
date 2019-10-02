import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ToolbarAndroid, Image, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
/**
* @author Antonio Souza
* @class MainForm
**/
class MainForm extends Component {
  state = {}

  render() {
    const { container } = styles
    return (
      <View style={container}>
        <View style={styles.mainFormContend}>

          <View style={styles.topMenu}>
            <View style={styles.topMenuAppTitle}>
              <Text style={styles.topMenuAppTitleText}>+ Saúde</Text>
            </View>
          </View> 



        </View>

        <View style={styles.actionButtons}>

          <TouchableOpacity style={styles.actionButton}>

          </TouchableOpacity>

        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  mainFormContend: {

  },
  topMenu: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '100%',
    backgroundColor: '#6000BF',
    elevation: 8
  },
  topMenuAppTitleText: {
    color: '#fff',
    fontFamily: 'Manjari Regular',
    fontSize: 40
  },
  actionButtons: {

  },
  actionButton: {

  }
})
export default MainForm