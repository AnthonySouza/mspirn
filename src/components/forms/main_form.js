import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image, Dimensions } from 'react-native'
import { Header } from 'react-native-elements';
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
          <Header
            statusBarProps={{ barStyle: 'light-content', backgroundColor: '#8000FF' }}
            barStyle="light-content" // or directly
            centerComponent={{ text: '+ Saúde', style: { 
              fontFamily: 'Manjari Regular',
              fontSize: 50, 
              color: '#fff',
              marginTop: -15
            }}}
            containerStyle={{
              backgroundColor: '#8000FF',
              justifyContent: 'space-around',
            }}
          />



        </View>

        <View style={styles.actionButtons}>

          {/* <TouchableOpacity style={styles.actionButton}>

          </TouchableOpacity> */}

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
  actionButtons: {

  },
  actionButton: {

  }
})
export default MainForm