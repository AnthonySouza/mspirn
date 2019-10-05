import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image, Dimensions, StatusBar } from 'react-native'
import { Header, ListItem, Card } from 'react-native-elements';
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
          <StatusBar backgroundColor={APP_DEFAULT_COLOR_1} barStyle="dark-content" />

          <View style={styles.topMenu}>
            <View style={styles.topMenuIconContend}>
              <Image style={styles.topMenuIcon} source={require('../resources/images/user.png')} />
            </View>
            <View style={styles.topMenuTitleContend}>
              <Text style={styles.topMenuAppTitle} >+ Saúde</Text>
            </View>
            <View style={styles.topMenuConfigButtonContend}>
              <Image style={styles.topMenuConfigButtonIcon} source={require('../resources/images/settings.png')} />
            </View>
          </View>
        </View>
        <View style={styles.actionButtons}>

        

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
    position: 'relative',
    alignItems: 'center',
    justifyContent:  'center',
    flexDirection: 'row',
    height: 70,
    width: '100%',
    backgroundColor: APP_DEFAULT_COLOR_1,
    padding: 25
  },
  topMenuIcon: {
    position: 'relative',
    height: 45,
    width: 45
  },
  topMenuConfigButtonIcon: {
    position: 'relative',
    height: 35,
    width: 35
  },
  topMenuAppTitle: {
    fontSize: 40,
    marginTop: 5,
    fontFamily: 'Lobster Regular',
    color: APP_TEXT_COLOR_WHITE
  },
  topMenuIconContend: {
    position: 'relative',
    flex: 1.3
  },
  topMenuTitleContend: {
    position: 'relative',
    alignItems: 'baseline',
    justifyContent:  'center',
    height: '100%',
    flex: 5
  },
  topMenuConfigButtonContend: {
    position: 'relative',
    flex: 1
  },
  actionButtons: {
    position: 'relative',
    height: '90%'
  },
  actionButton: {

  }
})
export default MainForm