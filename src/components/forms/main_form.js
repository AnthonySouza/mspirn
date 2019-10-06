import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, PixelRatio, StatusBar } from 'react-native'
import { Content, Header, Title, Button, Card, CardItem, Container, Drawer } from 'native-base';
import Touchable from 'react-native-platform-touchable';
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
      <Container style={container}>
        <View style={styles.mainFormContent}>
          <Header style={styles.topMenu}>
            <StatusBar backgroundColor={APP_STATUS_BAR_COLOR_2} barStyle="dark-content" hasTabs />
            <Button onPress={() => this.props.navigation.navigate("Detail")}  style={styles.topMenuUserButtonIcon} transparent>
              <Image style={styles.topMenuIcon} source={require('../resources/images/user.png')} />
            </Button>

            <Title style={styles.topMenuAppTitle}>+ Saúde</Title>

            <Button style={styles.topMenuConfigButtonIcon} transparent>
              {/* <Image style={styles.topMenuIcon} source={require('../resources/images/menu.png')} /> */}
            </Button>
          </Header>
          <View style={styles.collumnCard}>

            <View style={styles.rowCard}>
              <Touchable foreground={Touchable.Ripple(styles.cardButton1.backgroundColor)} style={styles.touchable}>
                <Card style={styles.cardButton1}>
                  <CardItem style={styles.cardIconItemContent} backgroundColor={styles.cardButton1.backgroundColor}>
                    <Image style={styles.cardIconItem} source={require('../resources/images/calendar.png')} resizeMode='center' />
                  </CardItem>
                  <CardItem style={styles.cardTextItemContent} backgroundColor={styles.cardButton1.backgroundColor}>
                    <Text styles={styles.cardText}>Consulta</Text>
                  </CardItem>
                </Card>
              </Touchable>

              {/* BOTÃO AGENDAMENTO */}
              <Touchable foreground={Touchable.Ripple(styles.cardButton2.backgroundColor)} style={styles.touchable}>
                <Card style={styles.cardButton2}>
                  <CardItem style={styles.cardTitleContent} backgroundColor={styles.cardButton2.backgroundColor}>
                    <Text style={styles.cardTitle}>Agendar</Text>
                  </CardItem>
                  <CardItem style={styles.cardIconItemContent} backgroundColor={styles.cardButton2.backgroundColor}>
                     <Image style={styles.cardIconItem} source={require('../resources/images/calendar.png')} resizeMode='center' />
                  </CardItem>
                  <CardItem style={styles.cardInfoContent} backgroundColor={styles.cardButton2.backgroundColor}>
                    <Text style={styles.cardInfo}>Faça uma consulta  com  data e hora marcadas.</Text>
                  </CardItem>
                </Card>
              </Touchable>
            </View>

            <View style={styles.rowCard}>

              {/* BOTÃO CARTEIRA VACINAÇÃO */}
              <Touchable foreground={Touchable.Ripple(styles.cardButton3.backgroundColor)} style={styles.touchable}>
                <Card style={styles.cardButton3}>
                  <CardItem style={styles.cardTitleContent} backgroundColor={styles.cardButton3.backgroundColor}>
                    <Text style={styles.cardTitle}>Vacinação</Text>
                  </CardItem>
                  <CardItem style={styles.cardIconItemContent} backgroundColor={styles.cardButton3.backgroundColor}>
                     <Image style={styles.cardIconItem} source={require('../resources/images/id-card.png')} resizeMode='center' />
                  </CardItem>
                  <CardItem style={styles.cardInfoContent} backgroundColor={styles.cardButton3.backgroundColor}>
                    <Text style={styles.cardInfo}>Abra  sua  carteira  de vacinação digital</Text>
                  </CardItem>
                </Card>
              </Touchable>

              {/* BOTÃO BUSCAR GPS */}
              <Touchable foreground={Touchable.Ripple(styles.cardButton4.backgroundColor)} style={styles.touchable}>
                <Card style={styles.cardButton4}>
                  <CardItem style={styles.cardTitleContent} backgroundColor={styles.cardButton4.backgroundColor}>
                    <Text style={styles.cardTitle}>Unidades</Text>
                  </CardItem>
                  <CardItem style={styles.cardIconItemContent} backgroundColor={styles.cardButton4.backgroundColor}>
                     <Image style={styles.cardIconItem} source={require('../resources/images/map.png')} resizeMode='center' />
                  </CardItem>
                  <CardItem style={styles.cardInfoContent} backgroundColor={styles.cardButton4.backgroundColor}>
                    <Text style={styles.cardInfo}>Faça uma busca de GPS por unidades de saúde mais proxima a você.</Text>
                  </CardItem>
                </Card>
              </Touchable>

            </View>
          </View>

        </View>


      </Container>
    )
  }

// FUNCTIONS

}


const styles = StyleSheet.create({
  mainFormContent: {
    backgroundColor: '#fff'
  },
  topMenu: {
    position: 'relative',
    backgroundColor: APP_DEFAULT_COLOR_1,
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    elevation: 0,
    marginBottom: 5
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
  },
  rowCard: {
    position: 'relative',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  collumnCard: {
    position: 'relative',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  touchable: {
    borderRadius: 23
  },
  cardButton1: {
    position: 'relative',
    width: Dimensions.get('window').width / 2 * 0.911111111,
    height: Dimensions.get('window').height / 2 * 0.811111111,
    borderRadius: 23,
    elevation: 0,
    borderColor: '#fff',
    padding: 10,
    backgroundColor: '#E39868'
  },
  cardButton2: {
    position: 'relative',
    width: Dimensions.get('window').width / 2 * 0.911111111,
    height: Dimensions.get('window').height / 2 * 0.811111111,
    borderRadius: 23,
    elevation: 0,
    borderColor: '#fff',
    padding: 10,
    backgroundColor: '#635C73'
  },
  cardButton3: {
    position: 'relative',
    width: Dimensions.get('window').width / 2 * 0.911111111,
    height: Dimensions.get('window').height / 2 * 0.811111111,
    borderRadius: 23,
    elevation: 0,
    borderColor: '#fff',
    padding: 10,
    backgroundColor: '#BF4E98'
  },
  cardButton4: {
    position: 'relative',
    width: Dimensions.get('window').width / 2 * 0.911111111,
    height: Dimensions.get('window').height / 2 * 0.811111111,
    borderRadius: 23,
    elevation: 0,
    borderColor: '#fff',
    padding: 10,
    backgroundColor: '#7587BF'
  },
  cardIconItemContent: {
    position: 'relative',
    justifyContent: 'center'
  },
  cardIconItem: {
    height: 90,
    width: 90,
  },
  cardTitleContent: {
    justifyContent: 'center'
  },
  cardInfoContent: {
    justifyContent: 'center'
  },
  cardTitle: {
    fontFamily: 'FredokaOne Regular',
    fontSize: 30,
    color: '#fff'
  },
  cardInfo: {
    fontFamily: 'Manjari Regular',
    fontSize:18,
    color: '#fff',
    textAlign: 'justify'
  }
})
export default MainForm