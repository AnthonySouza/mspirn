import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from 'react-native'
import { Container, Header, Title, Button } from 'native-base';

import PropTypes from 'prop-types'

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
          <Header style={styles.topMenu}>
            <StatusBar backgroundColor={APP_STATUS_BAR_COLOR_2} barStyle="dark-content" hasTabs />
            <Button style={styles.topMenuUserButtonIcon} transparent>
              <Image style={styles.topMenuIcon} source={require('../resources/images/user.png')} />
            </Button>

            <Title style={styles.topMenuAppTitle}>+ Saúde</Title>

            <Button style={styles.topMenuConfigButtonIcon} transparent>
              {/* <Image style={styles.topMenuIcon} source={require('../resources/images/menu.png')} /> */}
            </Button>
          </Header>
          <View style={styles.container}>
          </View>

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
    backgroundColor: APP_DEFAULT_COLOR_1,
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  },
  topMenuIcon: {
    position: 'relative',
    height: 40,
    width: 40
  },
  topMenuUserButtonIcon: {
    position: 'relative',
    height: 35,
    width: 35
  },
  topMenuConfigButtonIcon: {
    position: 'relative',
    height: 35,
    width: 35
  },
  topMenuAppTitle: {
    fontSize: 40,
    fontFamily: 'Lobster Regular',
    color: APP_TEXT_COLOR_WHITE,
    height: 40,
    alignSelf: 'center'
  }
})
export default MainForm