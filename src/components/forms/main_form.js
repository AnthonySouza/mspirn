import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image, Dimensions } from 'react-native'
import { Header, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types'

import AppSettings from '../settings/app_settings'

import { APP_DEFAULT_COLOR_1, APP_STATUS_BAR_COLOR_2, APP_TEXT_COLOR_WHITE } from '../settings/app_settings';

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
            statusBarProps={{ barStyle: 'light-content', backgroundColor: APP_STATUS_BAR_COLOR_2 }}
            barStyle="light-content" // or directly
            centerComponent={{ text: '+ Saúde', style: { 
              fontFamily: 'Manjari Regular',
              fontSize: 50, 
              color: APP_TEXT_COLOR_WHITE,
              marginTop: -15
            }}}
            containerStyle={{
              backgroundColor: APP_DEFAULT_COLOR_1,
              justifyContent: 'space-around',
              elevation: 8
            }}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            rightComponent={{ icon: 'home', style: { color: '#fff' } }}
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